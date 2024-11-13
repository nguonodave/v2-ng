import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <Analytics />
            <Outlet />
        </>
    );
}
