const {Server} = require("socket.io");

const io = new Server(8000,{
    cors:true
});

const emailToSocketMap = new Map();
const socketToEmailMap = new Map();
io.on("connection",(socket)=>{
    console.log("socket server",socket.id);


    // it is use to add entry 
    socket.on("room:join",(data)=>{
        const {email, room } = data;
        emailToSocketMap.set(email, socket.id);
        socketToEmailMap.set(socket.id , email);
        // when we get an another user we create an event which go to the existing user 
        io.to(room).emit("user:joined",{ email, id:socket.id });
        // when we get an another user we push them into the room 
        console.log(room);
        socket.join(room);

        // it send the user data to user
        io.to(socket.id).emit("room:join",data);

        // console.log(data);
    });

    socket.on('user:call',({to,offer})=>{
        io.to(to).emit('incomming:call',{from:socket.id,offer});
        // console.log(to,offer);
    })

    socket.on('call:accepted',({to,ans})=>{
        io.to(to).emit("call:accepted",{from :socket.id, ans});
    })

    socket.on('peer:nego:needed', ({to,offer})=>{
        io.to(to).emit("peer:nego:needed", {from:socket.id , offer});
    })

    socket.on('peer:nego:done',({to,ans})=>{
        io.to(to).emit("peer:nego:final",{from:socket.id,ans});

    
    })
})