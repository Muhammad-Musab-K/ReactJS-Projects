import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from '../../Firebase/Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";


export const SignIn = createAsyncThunk(
    "signIn/newSingIn", (user) => {
        const { email, password } = user;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                const user = userCredential.user;
                localStorage.setItem("user", user.email)
                if (user.email === "kmusab824@gmail.com") {
                    window.location.replace("/nav/Admin")
                } else {
                    window.location.replace("/nav/dashboard")
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                console.log(error.message);
            });
    }
)
const initialState = {
    newSignIn: {},
    status: "idle"
}

const SignInSlice = createSlice({
    name: "signInUser",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(SignIn.pending, (state) => {
                state.status = "loading"

            })
            .addCase(SignIn.fulfilled, (state, { payload }) => {
                state.status = "succeeded"
                state.newSignIn = payload

            })
            .addCase(SignIn.rejected, (state) => {
                state.status = "error"

            })

    }
})

export default SignInSlice.reducer 