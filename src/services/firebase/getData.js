import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
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
export const getCollectionData = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, "items"));
        let data = []
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), _id: doc.id })
        });
        return data

    } catch (error) {
        throw new Error(error);

    }
};

export const fetchMatchingData = async (collectionName, key, operation, value) => {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(key, operation, value));
    const querySnapshot = await getDocs(q);
    const results = [];
    querySnapshot.forEach((doc) => {
        results.push({ _id: doc.id, ...doc.data() });
    });
    return results
}


export const filterDataWithKeysValue = async (collectionName, keyValuePairObj) => {
    try {
        const collectionRef = collection(db, collectionName);

        let q = collectionRef;
        for (let i in keyValuePairObj) {
            q = query(q, where(i, "==", keyValuePairObj[i]));
        }
        const querySnapshot = await getDocs(q);
        const results = [];
        querySnapshot.forEach((doc) => {
            results.push({ _id: doc.id, ...doc.data() });
        });

        return results;



    } catch (error) {
        throw new Error(error);
    }
}

