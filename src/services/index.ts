import axios, { AxiosError } from "axios";
import { Note } from "../types";

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

export async function getNote(id: number) {
    const res = await axios.get(url(`/note/${id}`));

    return res.data as Note;
}

export async function createNote(authorId: number) {
    const res = await axios.post(url(`/note`), {
        authorId,
        color: 0,
        text: "Hello World !",
    } as Note);

    return res.data as Note;
}

export async function saveNote(note: Note) {
    const res = await axios.put(url(`/note/${note.id}`), note);

    return res.data;
}
