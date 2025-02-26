import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { LoginPage } from "../auth/pages/LoginPage";
import { CalendarPage } from "../calendar/pages/CalendarPage";
// import { getEnvVariables } from "../helpers/getEnvVariables";
import { useAuthStore } from "../hooks/useAuthStore";

export const AppRouter = () => {
  const { status, chechAuthToken } = useAuthStore();

  useEffect(() => {
    chechAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }
  // const authStatus = "not-authenticated";

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
