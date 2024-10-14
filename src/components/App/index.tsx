import { Route, Routes } from "react-router-dom";

import { StyledLayout, StyledMain } from "./App.styles";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { routes } from "@constants/routes";

export function App() {
    return (
        <StyledLayout>
            <Header />
            <StyledMain>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </StyledMain>
            <Footer />
        </StyledLayout>
    );
}
