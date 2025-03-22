import { Outlet, Navigate } from "react-router-dom";

export const Protect = () =>{
    const user = false;

    return (
        <div>
             {user ? <Outlet /> : <Navigate to="/" />}
        </div>
    )
}