import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import PrivateRoute from "./components/PrivateRoute"; // 👈 dùng file mới tạo

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route
                    path="/users"
                    element={
                        <PrivateRoute>
                            <UserList />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/users/:id"
                    element={
                        <PrivateRoute>
                            <UserDetail />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
