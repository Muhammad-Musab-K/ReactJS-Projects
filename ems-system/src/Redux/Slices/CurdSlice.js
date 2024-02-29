import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../Firebase/Firebase";


const initialState = {
    status: "idle",
    updateData: {},
    addUpdateData: {}
}
export const updateData = createAsyncThunk(
    "update/UpdateData",
    async ({ newData, id }, thunkAPI) => {
        try {
            const docRef = doc(db, 'employees', id);
            await setDoc(docRef, newData);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account Updated",
                showConfirmButton: false,
                timer: 1500
            });
            return newData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const AddUpdateData = createAsyncThunk(
    "addUpdate/addUpdateData",
    async ({ assignTask, id }, thunkAPI) => {
        try {
            const docRef = doc(db, 'employees', id);

            const docSnapshot = await getDoc(docRef);
            const existingTasks = docSnapshot.data().task || [];
            const newTasks = [...existingTasks, assignTask]
            await updateDoc(docRef, { task: newTasks });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account Updated",
                showConfirmButton: false,
                timer: 1500
            });
            return newTasks;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const DeleteTask = createAsyncThunk(
    "deleteTask/deleteTaskData",
    async ({ index, id }, thunkAPI) => {
        try {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            });

            const docRef = doc(db, 'employees', id);

            const docSnapshot = await getDoc(docRef);
            const tasks = docSnapshot.data().task || [];

            const indexToDelete = tasks.findIndex(task => task.index === index);

            if (indexToDelete === -1) {
                throw new Error("Task not found");
            }

            await swalWithBootstrapButtons.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true
            }).then(async (result) => {
                if (result.isConfirmed) {
                    tasks.splice(indexToDelete, 1);
                    await updateDoc(docRef, { task: tasks });
                    await swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your task has been deleted.",
                        icon: "success"
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    await swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your task deletion has been cancelled.",
                        icon: "error"
                    });
                }
            });

            return tasks;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const CurdSlice = createSlice({
    name: "updateUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateData.pending, (state) => {
                state.status = "loading"
            })
            .addCase(updateData.fulfilled, (state, { payload }) => {
                state.status = "succeeded"
                state.updateData = payload
            })
            .addCase(updateData.rejected, (state) => {
                state.status = "error"
            })

            .addCase(AddUpdateData.fulfilled, (state, { payload }) => {
                state.addUpdateData = payload
                state.status = "succeeded"

            })

            .addCase(AddUpdateData.rejected, (state) => {
                state.status = "error"
            })
            .addCase(DeleteTask.fulfilled, (state, { payload }) => {
                state.status = "succeeded"

            })

            .addCase(DeleteTask.rejected, (state) => {
                state.status = "error"
            })


    }
})

export default CurdSlice.reducer