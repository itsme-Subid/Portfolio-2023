import { lazy } from "react";
import { createGlobalStyle } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProtectedRoute from "./components/ProtectedRoute";
import PageLayout from "./layout/pageLayout";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const GlobalStyle = createGlobalStyle`
  :root{
    --font-poppins: 'Poppins', sans-serif;
    --light-color: 252, 245, 235;
    --dark-color: 17, 27, 33;
    --primary-color: 37, 211, 102;
    --secondary-color: 0, 134, 255;
    --white-color: 255, 255, 255;
    --danger-color: 255, 0, 0;
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
  html, body {
    overflow-x: hidden;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-poppins, sans-serif);
    outline: none;
  }
  body {
    color-scheme: dark;
    position: relative;
    background-color: rgb(var(--dark-color));
    color: rgb(var(--light-color));
  }
  .container {
    margin-inline: auto;
    width: min(90%, 70rem);
  }
  a {
    text-decoration: none;
    color: inherit;
    transition: 0.15s;
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    user-select: none;
  }
`;

const App = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route
            path="/login"
            element={
              <PageLayout>
                <Login />
              </PageLayout>
            }
          />
          <Route
            path="/"
            element={
              <PageLayout>
                <Home />
              </PageLayout>
            }
          />
          <Route
            path="*"
            element={
              <PageLayout>
                <NotFound />
              </PageLayout>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
