import axios from "axios";
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