import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // để chuyển trang
import './Login.css'; // Dùng chung với Login

function Register() {
    const [user, setUser] = useState({ username: "", password: "", email: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/users/register", user);
            alert("Đăng ký thành công!");
            navigate("/login");
        } catch (error) {
            console.log(error.response);
            alert("Lỗi đăng ký");
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Đăng ký</h2>
                <input
                    name="username"
                    placeholder="Tên đăng nhập"
                    onChange={handleChange}
                    className="input-field"
                    required
                />
                <input
                    name="email"
                    placeholder="Email"
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
                <button type="submit" className="submit-button">Đăng ký</button>
                <p className="switch-text">
                    Đã có tài khoản?{" "}
                    <span className="switch-link" onClick={() => navigate("/login")}>
                        Đăng nhập tại đây
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Register;
