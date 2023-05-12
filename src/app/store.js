import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../services/Reducers/registerSlice";
import loginSlice from "../services/Reducers/loginSlice";
import heroesSlice from "../services/Reducers/heroesSlice";

export const store = configureStore({
    reducer: {
        register: registerSlice,
        login: loginSlice,
        heroes: heroesSlice,
    },
});
