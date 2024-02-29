import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  addDoc, collection,} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import { db } from '../../Firebase/Firebase';
import Swal from "sweetalert2";

const storage = getStorage();

export const newUser = createAsyncThunk(
    "new/newUser", async (employee) => {
        try {
            const storageRef = ref(storage, `employees/${employee.file.name}`);

            await uploadBytes(storageRef, employee.file)
            const url = await getDownloadURL(storageRef)

            employee.file = url

            await addDoc(collection(db, "employees"), employee)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log(error)
        }
    }
)


const initialState = {
    status: "idle",
    newUser: {}
}

const AddSlice = createSlice({
    name: "newUser",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(newUser.pending, (state) => {
                state.status = "loading"

            })
            .addCase(newUser.fulfilled, (state, { payload }) => {
                state.status = "secceeded"
                state.newUser = payload
            })
            .addCase(newUser.rejected, (state) => {
                state.status = "error"
            })
    }
})

export default AddSlice.reducer
