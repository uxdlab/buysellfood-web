import { useMemo } from "react";
import { useSelector } from "react-redux";


export const useFetchUserData = (options, key = '_id') => {
    let userData = useSelector(e => e.auth.userData)
    return useMemo(() => {
        return userData
    }, [userData]);
};

