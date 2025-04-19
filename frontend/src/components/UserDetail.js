import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/${id}`).then((res) => {
            setUser(res.data);
        });
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserDetail;
