import axios from "axios";

const API_URL = "http://localhost:8000/register";

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    console.log(response);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

const authService = {
    register,
};

export default authService;
