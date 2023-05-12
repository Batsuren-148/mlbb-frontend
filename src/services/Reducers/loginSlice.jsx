import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../Auth/loginAuth";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    userSuccess: null,
    isLoggedIn: !!localStorage.getItem("isLoggedIn"),
    message: "",
};

const loginSlice = createSlice({
    name: "loginUser",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log("Login reducer payload: ", action.payload);
            console.log("Login reducer state before update: ", state);
            state.isLoggedIn = true;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";

            state.user = action.payload;
            state.userSuccess = action.payload;

            console.log("Login reducer state after update: ", state);
        },
        logOut: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
            state.isLoggedIn = false;
            // reset other auth-related state
            state.user = null;
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userData");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("expiresIn");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                toast.info("Login pending! ", { autoClose: 3000 });
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.userSuccess = action.payload.userData;

                // local and session storage save logged user data
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem(
                    "userData",
                    JSON.stringify(action.payload)
                );
                sessionStorage.setItem(
                    "token",
                    JSON.stringify(action.payload.userData)
                );
                sessionStorage.setItem(
                    "expiresIn",
                    action.payload.expiresIn.toString()
                );

                toast.success(action.payload.success, { autoClose: 3000 });
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.error.message;
                toast.error(action.error.message, {
                    autoClose: 3000,
                });
            });
    },
});

export const { login, logOut } = loginSlice.actions;

export default loginSlice.reducer;
