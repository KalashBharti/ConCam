import React, { useEffect, useCallback, useState } from 'react'
import { useSocket } from '../../contexts/SocketProvider';
import ReactPlayer from "react-player"
import peer from "../../Service/Peer"
export default function Room() {

  const socket = useSocket();

  // it store t 
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream , setRemoteStream] = useState();
  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`email joined ${email} the room`);
    setRemoteSocketId(id);

  }, [])

  const handleCallUser = useCallback(async () => {
    // takes the user video and audio
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true }).catch(e=>{
      console.log(e);
    });
    const offer = await peer.getOffer();
    //send the offer to the other user in the peer
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(async ({ from, offer }) => {
    setRemoteSocketId(from);
    // takes the user video and audio
    // const stream = await MediaDevices.getUserMedia();
    const stream = await navigator.mediaDevices.getUserMedia({
       audio: true,
       video: true });
    setMyStream(stream);
    console.log("incomming call ", from, offer);
    const ans = await peer.getAnswer(offer);
    socket.emit("call:accepted", { to: from, ans });
  }, [socket])

  const sendStream = useCallback(()=>{
    for(const track of myStream.getTracks()){
      peer.peer.addTrack(track,myStream);

    }
  },[myStream])

  // accepts stream from the other user
  const handleCallAccepted = useCallback(({from,ans})=>{
    peer.setLocalDescription(ans);
    console.log("Call Accepted");
    sendStream();
   
  },[sendStream])
  
  const handleNegoNeeded =useCallback(async()=>{
    const offer = await peer.getOffer();
      socket.emit('peer:nego:needed', {offer,to:remoteSocketId})
  },[remoteSocketId,socket])

  useEffect(()=>{
    peer.peer.addEventListener('negotiationneeded',handleNegoNeeded)

    return ()=>{
      peer.peer.removeEventListener('negotiationneeded',handleNegoNeeded)
    }
  },[handleNegoNeeded])
  // strem transfer useEffect


  
  const handleNegoNeedIncomming = useCallback(async({from,offer})=>{
      const ans = await peer.getAnswer(offer);
      socket.emit('peer:nego:done', {to:from , ans})
  },[socket])

  const handleNegoNeedFinal = useCallback(async ({ans})=>{
      await peer.setLocalDescription(ans);
  },[])

  // track comes
  useEffect(()=>{
    peer.peer.addEventListener('track',async (ev)=>{
      const remoteStream = ev.streams;
      console.log("GOT TRACKS");
      setRemoteStream(remoteStream[0])
    })
  },[])


  // Use Effects for socket
  useEffect(() => {
    // console.log(socket);
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on('peer:nego:needed',handleNegoNeedIncomming)
    socket.on('peer:nego:final',handleNegoNeedFinal)
    
   
    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off('peer:nego:needed',handleNegoNeedIncomming)
      socket.off('peer:nego:final',handleNegoNeedFinal)
    }

  }, [socket, handleUserJoined,handleIncommingCall,handleCallAccepted,handleNegoNeedIncomming,handleNegoNeedFinal]);

  return (
    <div>
      {/* <h1>Rooom Joined</h1> */}
      {remoteSocketId? <h4 className='conn_desc success'> Connected</h4>: <h4 className='conn_desc error'>Not Connected</h4>}
      {remoteSocketId && <button onClick={handleCallUser}>Call</button>}
      {myStream && <button onClick={sendStream}>Send Stream</button>}
      
        <div className="stream">

        <div className=" other-stream">
        {remoteStream && <>
         <ReactPlayer playing muted height={"100%"} width={"100%"} url={remoteStream} /></>}
        </div>
        <div className='my-stream'>  
        {myStream && <>
          <ReactPlayer className="" height={"100%"} width={"100%"}playing muted url={myStream} />
        </>}
        </div>
         <div className="stream-controls">
          <div className="controller">
          <i class="ri-vidicon-fill" style={{fontSize:"2rem",color:"white"}}></i>
          <i class="ri-mic-fill" style={{fontSize:"2rem",color:"white"}}></i>
          <i class="ri-close-circle-fill" style={{fontSize:"3.5rem", color:"red"}}></i>
          </div>
         </div>
        </div>
      
       
    </div>
  )
}
