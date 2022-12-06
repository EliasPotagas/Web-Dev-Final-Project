import data from '../data/user.json';
import { reactive } from "vue";


const user = reactive(data.user as User[]);


export function getUsers(): User[] {
    return data.user as User[];
}

export function getUser(id: string) {
    return getUsers().find((user) => user.id === id);
}


export function deleteUser(_id){
    user.splice(_id,1)
}
export interface User {
    [x: string]: any;
    firstname: string,
    lastname: string,
    id: string,
    isAdmin: boolean,
    
}

export interface Friends{
    friend: User[]
}
