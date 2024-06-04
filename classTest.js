//import {Config} from './Config.js'

class User{
    constructor(username, password, config){
        this.username = username;
        this.password = username;
        this.config = config;
    }

    get username(){
        return this.username;
    }

    get config(){
        return this.config;
    }


}