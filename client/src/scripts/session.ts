import { reactive } from "vue";
const session = reactive( {
    user: null as User | null,
});

export function login(firstName: string, lastName: string, id?: number, admin?:boolean) {

    session.user = {
        firstName,
        lastName,
        id,
        admin
    };
}

export function logout() {
    session.user = null;
}

export class User {
    public firstName?: string;
    public lastName?: string;
    public id?: number;
    public admin?:boolean;
    
}
export default session;