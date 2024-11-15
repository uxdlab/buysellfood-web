import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";


export const getDocData = async (collectionName, docId) => {
    try {
        const docRef = doc(db, collectionName, docId);
        let docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            return ({})
        }
    } catch (error) {
        throw new Error(error);

    }
}