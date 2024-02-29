import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db, auth } from '../../Firebase/Firebase'
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

export const SignUp = createAsyncThunk(
    "signUp/newSignUp", (user) => {
        const { name, email, password } = user
        createUserWithEmailAndPassword(auth, email, password, name,)
            .then(async (userCredential) => {
                let userId = userCredential.user.uid
                try {
                    console.log("id" + userCredential.user.uid)
                    const docRef = await setDoc(doc(db, "users", userId), {
                        name,
                        email,
                        userId
                    });
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Account Created",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.assign("/signin")
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
)
const initialState = {
    newSignUp: {},
    status: "idle"
}

const SignUpSlice = createSlice({
    name: "signUpUser",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(SignUp.pending, (state) => {
                state.status = "loading"

            })
            .addCase(SignUp.fulfilled, (state, { payload }) => {
                state.status = "succeeded"
                state.newSignUp = payload

            })
            .addCase(SignUp.rejected, (state) => {
                state.status = "error"

            })

    }
})

export default SignUpSlice.reducer 