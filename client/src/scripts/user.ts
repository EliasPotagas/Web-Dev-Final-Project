import data from '../data/user.json';

export function getUsers() {
    return data.user as User[];
}

export function getUser(id: number) {
    return getUsers().find((user) => user.id === id);
}

export function deleteuser(id: number) {
    data.user = data.user.filter((user) => user.id !== id);
}

export interface User {
    firstname: String,
    lastname: String,
    id: number
    isAdmin: boolean
}