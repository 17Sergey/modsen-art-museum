import { routes } from "@constants/routes";
import { Route, Routes } from "react-router-dom";

export function App() {
    return (
        <>
            <Routes>
                {routes.map((route) => (
                    <Route
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </>
    );
}
