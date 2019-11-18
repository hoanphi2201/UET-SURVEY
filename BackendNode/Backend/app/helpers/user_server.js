module.exports = class UserServer {
    constructor() {
        this.users = [];
    }
    addUser(id, userId, firstName, lastName, userName, avatar) {
        let user = this.getUserByUserId(userId);
        if(!user) {
            let user = {id, userId, firstName, lastName, userName, avatar};
            this.users.push(user);
        }
        return this.users;
    }
    removeUser(id) {
        let user = this.getUser(id);
        if(user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }
    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
    }
    getUserByUserId(userId) {
        return this.users.filter((user) => user.userId === userId)[0];
    }
    getUserByUserName(userName) {
        return this.users.filter((user) => user.userName === userName)[0];
    }
    getListUsers() {
        return this.users;
    }
}