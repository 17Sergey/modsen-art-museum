import { Header } from "@components/Header";
import { routes } from "@constants/routes";
import { Route, Routes } from "react-router-dom";

export function App() {
    return (
        <>
            <Header />
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </>
    );
}
