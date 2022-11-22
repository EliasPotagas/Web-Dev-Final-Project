import data from '../data/user.json';
import { reactive } from "vue";

export function getUsers(): User[] {
    return data.user as User[];
}

export function getUser(id: number) {
    return getUsers().find((user) => user.id === id);
}

export function deleteuser(id: number) {
    data.user = data.user.filter((user) => user.id !== id);
}

export interface User {
    firstname: string,
    lastname: string,
    id: number
    isAdmin: boolean
}

const user = reactive(data.user as User[]);

export function addUsertoTable() {
}



export default user;
