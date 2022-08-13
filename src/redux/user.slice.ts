import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    email?: string;
    id?: number;
    name?: string;
}

const initialState: UserState = {};

export const userSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<UserState>) => {
            state = action.payload;
            return state;
        },
        unSet: () => {
            return {};
        },
    },
});

export const { set, unSet } = userSlice.actions;

export default userSlice.reducer;
