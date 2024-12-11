import { doc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"



export const updateDocData = (collectionName, docId, data) => {

    console.log(collectionName,docId,data)
    

    let docRef = doc(db, collectionName, docId)
    return updateDoc(docRef, data)
}



