import { reactive } from "vue";
import myFetch from "../services/myFetch";
const session = reactive({
    user: null as User | null,
    loading: 0,
    error: null as string | null,
    messages: [] as Message[],
});

export function login(firstName: string, lastName: string, id: string, admin?: boolean, email?: string) {

    session.user = {
        firstName,
        lastName,
        id,
        admin,
        email
    };
}

export function setError(error: string | null) {
    session.error = error;
    if (error) {
        session.messages.push({ type: 'danger', text: error });
    }
}

export async function api<T>(url: string, data: any = null, method?: string) {
    setError(null);
    try {
        let x = await myFetch<T>(url, data, method);
        //console.log("x =", x)
        return x;
    } catch (error) {
        setError(error as string);
    } finally {
        session.loading--;
    }
    return {} as T;
}

export function logout() {
    session.user = null;
}

export class User {
    public firstName?: string;
    public lastName?: string;
    public id: any;
    public admin?: boolean;
    public friends?: number[];
    public email?: string;
}

export interface Message {
    text: string;
    type: 'danger' | 'warning' | 'success' | 'info';
}


export default session;