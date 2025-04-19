import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/users/login", credentials);
            localStorage.setItem("token", res.data.token);
            alert("Đăng nhập thành công!");
            navigate("/users");
        } catch (error) {
            alert("Sai thông tin đăng nhập");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Đăng nhập</h2>
                <input
                    name="username"
                    placeholder="Tên đăng nhập"
                    onChange={handleChange}
                    className="input-field"
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={handleChange}
                    className="input-field"
                    required
                />
                <button type="submit" className="submit-button">Đăng nhập</button>
                <p className="switch-text">
                    Chưa có tài khoản?{" "}
                    <span className="switch-link" onClick={() => navigate("/register")}>
                        Đăng ký tại đây
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Login;
