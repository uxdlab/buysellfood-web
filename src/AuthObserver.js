import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./services/firebase/firebase";
import { clearUser, setUser } from "./store/slices/authSlice";
import { getDocData } from "./services/firebase/getData";


const AuthObserver = () => {
    const dispatch = useDispatch();
    const auth = getAuth(app);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {


                setUserDetailsInStore(user)


            } else {
                dispatch(clearUser());
            }
        });

        return () => unsubscribe();
    }, [dispatch]);

    async function setUserDetailsInStore(user) {
        let userData = await getDocData("users", user.uid)
        console.log(userData)
        dispatch(setUser({ email: user.email, uid: user.uid,userData:userData }));
    }

    return null; // This component does not render anything
};

export default AuthObserver;
