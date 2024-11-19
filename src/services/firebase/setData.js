import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";


export const addDataWithId = async (collection, docId, data) => {
    try {
        const docRef = doc(db, collection, docId);
        return await setDoc(docRef, data);

    } catch (error) {
        throw new Error(error);
    }
};

export const addData = async (collectionName, data) => {
    try {
        return await addDoc(collection(db, collectionName), data);
    } catch (error) {
        throw new Error(error);
    }
}

