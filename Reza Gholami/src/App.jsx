import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FormAuth from "@/components/FormAuth/FormAuth";
import ChatPage from "@/components/chat/ChatPage";
const Register = lazy(() => import("@/components/FormAuth/Register"));
const Login = lazy(() => import("@/components/FormAuth/Login"));
const Modal = lazy(() => import("@/components/chat/components-chatPage/Modal"));
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            localStorage.token ? (
              <Navigate to="/chat" />
            ) : (
              <Navigate to="/auth/login" />
            )
          }
        />
        <Route path="/auth" element={<FormAuth />}>
          <Route
            path="login"
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense>
                <Login />
                <Register />
              </Suspense>
            }
          />
        </Route>
        <Route path="chat" element={<ChatPage />}>
          <Route
            path="addContact"
            element={
              <Suspense>
                <Modal />
              </Suspense>
            }
          />
          <Route
            path="editContact"
            element={
              <Suspense>
                <Modal />
              </Suspense>
            }
          />
          <Route
            path="deleteContact"
            element={
              <Suspense>
                <Modal />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
