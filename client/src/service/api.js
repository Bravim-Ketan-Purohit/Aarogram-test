import axios from "axios";

const URL = "http://localhost:8080/add";



export const generateReport = async (data) =>{
    try {
        return await axios.post(`${URL}/add`,data)
    } catch (error) {
        console.log(error);
    }
}

