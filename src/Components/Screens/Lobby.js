import { React, useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSocket } from '../../contexts/SocketProvider';
import img from '../../images/svgs/Sign up.gif'
import '..//../style/screen.css'
export default function Lobby() {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();
  const socket = useSocket();
  // console.log(socket);

  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();  //to prevent automatic submission
    // console.log({email,room});
    socket.emit("room:join", { email, room })
  }, [email, room, socket])

  const handleJoinRoom = useCallback((data) => {
    const { email, room } = data;
    // after entering the email and room the user is re directed to the room and wait for the other user to join the room
    navigate(`/room/${room}`);
  }, [navigate])
  // it fetch the user data on submit
  // whenever we get event from backend we call handleJoinRoom
  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom)
    }
  }, [socket, handleJoinRoom])
  return (
    <div className='container mt-3 d-flex justify-content-center'>
      <form className='d-flex flex-column'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" class="form-control" id="email" value={email} onChange={(e) => { setEmail(e.target.value); console.log(email); }} />

        </div>

        <br />
        <label className="form-label" htmlFor="room">Enter Room code</label>
        <input type='text' className="form-control" id="room" value={room} onChange={(e) => setRoom(e.target.value)} />
        <br />
        <button class="btn btn-primary"  onClick={handleSubmitForm} > join</button>

      </form>
    </div>
  )
}
