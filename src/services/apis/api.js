import axios from "axios";
import { CURRENCY_CONVERTER_KEY } from "../../utils/constants";
export const BASE_URL = "https://doctor-batting-3716a985cffb.herokuapp.com/"
export const apis = {
    uploadDoc: "upload/uploadMultipleDocsData"
}

export const uploadDoc = async (filesArr) => {
    const formData = new FormData();
    for (let i = 0; i < filesArr.length; i++) {
        formData.append("upload", filesArr[i]);
    }
    return await axios.post(BASE_URL + apis.uploadDoc, formData)
}

export const convertCurrency = async (from, to, amount) => {

    console.log(from)
    console.log(to)
    console.log(amount)


    const apiKey = CURRENCY_CONVERTER_KEY;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`;
    return await axios.get(url);
}