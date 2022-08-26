import { MsalProvider } from "@azure/msal-react";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/layout/header";
import { initMsal } from "../config/auth";
import { apiPath } from "../constants/menu";
import CheckoutPage from "../pages/checkout/checkout-page";
import ErrorBoundaryPage from "../pages/error-boundary/error-boundary";
import UploadFile from "../pages/file-upload/upload-file";
import GridExample from "../pages/grid/grid-page";
import HomePage from "../pages/home";
import LoginPage from "../pages/login/login-page";
import MainPage, { Test } from "../pages/mui-table";
import { theme } from "../Theme/theme";
export const msalInstance = initMsal();
const App = () => {
  return (
    <BrowserRouter>
      <MsalProvider instance={msalInstance}>
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
              <Route path={apiPath.upload} element={<UploadFile />} />
              <Route path={apiPath.login} element={<LoginPage />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </MsalProvider>
    </BrowserRouter>
  );
};

export default App;
