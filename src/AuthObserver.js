import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./services/firebase/firebase";
import { clearUser, setUser } from "./store/slices/authSlice";
import { getDocData } from "./services/firebase/getData";
import { loader } from "./utils";


const AuthObserver = () => {
    const dispatch = useDispatch();
    const auth = getAuth(app);
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                loader.start()
                setUserDetailsInStore(user)

            } else {
                dispatch(clearUser());
                loader.stop()
            }
        });

        return () => unsubscribe();
    }, [dispatch]);

    async function setUserDetailsInStore(user) {
        try {
            loader.start()
            let userData = await getDocData("users", user.uid)
            console.log(userData)
            dispatch(setUser({ email: user.email, uid: user.uid, userData: userData }));
        }
        catch (err) {
            console.log(err)
            dispatch(clearUser());
        }
        finally {
            loader.stop()

        }
    }

    return null; // This component does not render anything
};

export default AuthObserver;
