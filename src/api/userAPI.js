import axios from "axios";
import { BASEURL } from "./config";
export default async function  getUserList(pageNumber=1){
    const URL = `${BASEURL}/api/users?page=${pageNumber}`;
    const res = await axios.get(URL);
    return res.data;
}