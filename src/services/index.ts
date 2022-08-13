import axios, { AxiosError } from "axios";

function url(route: string = ""): string {
    return `http://localhost:3333${route}`;
}

export async function createUser(email: string) {
    try {
        const res = await axios.post(url("/user"), { email });

        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            return error.response?.data.message;
        }
    }
}

export async function authUser(email: string) {
    try {
        const res = await axios.post(url("/user/auth"), { email });

        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            return error.response?.data.message;
        }
    }
}

export async function getUserNotes(id: number) {
    const res = await axios.get(url(`/note/user/${id}`));

    return res.data as Array<any>;
}
