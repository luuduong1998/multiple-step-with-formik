import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/layout/header";
import { apiPath } from "../constants/menu";
import CheckoutPage from "../pages/checkout/checkout-page";
import ErrorBoundaryPage from "../pages/error-boundary/error-boundary";
import GridExample from "../pages/grid/grid-page";
import HomePage from "../pages/home";
import MainPage, { Test } from "../pages/mui-table";
import { theme } from "../Theme/theme";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={apiPath.checkout} element={<CheckoutPage />} />
            <Route path={apiPath.grid} element={<GridExample />} />
            <Route path={apiPath.muiTable} element={<MainPage />} />
            <Route path={apiPath.contact} element={<Test />} />
            <Route path={apiPath.component} element={<ErrorBoundaryPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
