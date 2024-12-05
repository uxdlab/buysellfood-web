import { useSelector } from "react-redux";

export const useUserId = () => {
    const user = useSelector((state) => state.auth?.user);
    return user?.uid || null;
};