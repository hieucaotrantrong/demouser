import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

function UserList() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    // Lấy danh sách user
    const fetchUsers = async () => {
        const res = await axios.get("http://localhost:8080/api/users");
        setUsers(res.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Xử lý logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    // Xử lý xoá user
    const handleDelete = async (id) => {
        const confirm = window.confirm("Bạn có chắc muốn xoá người dùng này?");
        if (!confirm) return;

        try {
            await axios.delete(`http://localhost:8080/api/users/${id}`);
            alert("Xoá thành công!");
            fetchUsers(); // Cập nhật lại danh sách
        } catch (error) {
            alert("Xoá thất bại!");
        }
    };

    return (
        <div className="userlist-container">
            <h2 className="userlist-title">Danh sách người dùng</h2>
            <ul className="userlist">
                {users.map((user) => (
                    <li key={user.id} className="userlist-item">
                        <Link to={`/users/${user.id}`} className="userlist-link">
                            {user.username}
                        </Link>
                        <button
                            onClick={() => handleDelete(user.id)}
                            className="delete-button"
                            style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
                        >
                            Xoá
                        </button>
                    </li>
                ))}
            </ul>

            <button onClick={handleLogout} className="logout-button">
                Đăng xuất
            </button>
        </div>
    );
}

export default UserList;
