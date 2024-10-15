import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { StyledLayout, StyledMain } from "./App.styles";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Loader } from "@components/Loader";

import { ROUTES } from "@constants/routes";

export function App() {
    return (
        <StyledLayout>
            <Header />
            <StyledMain>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        {ROUTES.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.component />}
                            />
                        ))}
                    </Routes>
                </Suspense>
            </StyledMain>
            <Footer />
        </StyledLayout>
    );
}
