import { createAsyncThunk, createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';

export const fetchData = createAsyncThunk(
    "users/fetchData",
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "employees"));
            const employees = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return employees;
        } catch (error) {
            throw error;
        }
    }
);


const initialState = {
    SingleuserData: {},
    AllUserData: [],
    status: "idle"
};

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, { payload }) => {
                state.status = "succeeded";
                state.AllUserData = payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = "failed";
                state.AllUserData = [];
            });
    }
});

export default UserSlice.reducer;

export const loginUser = createDraftSafeSelector(
    [state => state.users.AllUserData, (state, email) => email],
    (AllUserData, email) => AllUserData.find(data => data.email.toLowerCase() === email)
)

export const getLoginUser = createDraftSafeSelector(
    [state => state.users.AllUserData, (state, id) => id],
    (AllUserData, id) => AllUserData.find(data => data?.id == id)
)


