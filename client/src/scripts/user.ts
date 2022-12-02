import data from '../data/user.json';
import { reactive } from "vue";


const user = reactive(data.user as User[]);


export function getUsers(): User[] {
    return data.user as User[];
}

export function getUser(id: number) {
    return getUsers().find((user) => user.id === id);
}

// export function deleteuser(id: number) {
//     data.user = data.user.filter((user) => user.id !== id);
// }

export function deleteUser(index){
    user.splice(index,1)
}
export interface User {
    [x: string]: any;
    firstname: string,
    lastname: string,
    id: number
    isAdmin: boolean,
    
}



export default user;
