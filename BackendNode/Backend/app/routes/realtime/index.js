const express = require('express');
const router = express.Router();
const UserServer = require(__pathHelper + 'user_server');
module.exports = function(io) {
    let users = new UserServer();
    io.on('connection', (socket) => { 
        console.log('--------- socket connection---------');
        socket.on('USER_CONNECT', async (data) => {
            users.addUser(socket.id, data.userId, data.firstName, data.lastName, data.userName, data.avatar);
        })
        socket.on('CLIENT_SEND_A_COPY_SURVEY', (data) => {
            const user = users.getUserByUserName(data.to);
            if (user) {
                io.to(user.id).emit('SERVER_SEND_NEW_A_COPY_SURVEY', data);
            }
        })

        socket.on('disconnect', () => {
            console.log('--------- socket disconnection---------');
            const user = users.removeUser(socket.id);
        })
        socket.on('USER_DISCONNECT', () => {
            console.log('--------- socket disconnection---------');
            const user = users.removeUser(socket.id);
            
        })
    });
    return router;
}