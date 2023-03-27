import { Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../App';

export const  RouteGuard = () => {
    const { user } = useContext(UserContext);
    console.log(user);

    if (!user._id){
        return <Navigate to="/login" />;
    }
    
    return <Outlet />;
}