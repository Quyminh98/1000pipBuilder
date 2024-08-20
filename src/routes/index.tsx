import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { PATH_HOME } from "./paths";

const Homepage = lazy(() => import("../pages/Home"));
export default function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<MainLayout />}>
                        <Route path={PATH_HOME} element={<Homepage />} />
                    </Route>

                </Route>
            </Routes>
        </Suspense>
    );
}