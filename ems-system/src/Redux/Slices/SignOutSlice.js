import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from '../../Firebase/Firebase'
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";


export const SignOutUser = createAsyncThunk(
    "signOut/newSignOut", async () => {
        await signOut(auth)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                localStorage.setItem("user", "")
                window.location.replace("/signin")
            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something is wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    }
)
const initialState = {
    signOutUser: {},
    status: "idle"
}

const SignOutSlice = createSlice({
    name: "signOutUser",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(SignOutUser.pending, (state) => {
                state.status = "loading"

            })
            .addCase(SignOutUser.fulfilled, (state, { payload }) => {
                state.status = "succeeded"

            })
            .addCase(SignOutUser.rejected, (state) => {
                state.status = "error"

            })

    }
})

export default SignOutSlice.reducer 