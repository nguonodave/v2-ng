import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProjectsPage from "./pages/ProjectsPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
        </Route>
    )
);

export default function App() {
    return (
        // <>
        //     <Navbar />
        //     <Home />
        // </>

        <RouterProvider router={router} />
    );
}
