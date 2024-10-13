import { Route, Routes } from "react-router-dom";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { routes } from "@constants/routes";

export function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </main>
            <Footer />
        </>
    );
}
