export const API_ROOT = import.meta.env.VITE_API_ROOT

export default async function myFetch<T>(url: string, data: any = null, method?: string ): Promise<T> {
    console.log("in myfetch")
    const options: RequestInit = {
        method: method ?? (data ? 'POST' : 'GET'),
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined,
    };
    console.log(options)
    let dest= API_ROOT + url;
    console.log("dest", dest)
    return await fetch(dest, options).then( x=>x.json() );
}