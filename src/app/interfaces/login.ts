//import { UserInfo } from "os";


import { User } from '../models/user.model'
export interface Login {
    user: User;
    token: string;
}