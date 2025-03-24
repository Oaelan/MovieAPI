import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Result from "./Reuslt";
import Header from "./Header";
import Footer from "./Footer";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/search/:searchTerm" element={<Result />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  </StrictMode>
);
