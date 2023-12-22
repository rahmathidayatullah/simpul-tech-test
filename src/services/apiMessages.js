import axios from "axios";

export async function getMessages() {
    return await axios.get('https://be-dummy-simple-tech.vercel.app/messages')
}

export async function getMessage(id) {
    return await axios.get(`https://be-dummy-simple-tech.vercel.app/messages/${id}`)
}