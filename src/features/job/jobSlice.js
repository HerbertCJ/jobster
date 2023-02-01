import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'intership'],
    jobType: 'full-time',
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'peding',
    isEditing: false,
    editJobId: '',
}

const jobSlice = createSlice({
    name: 'job',
    initialState,
})

export default jobSlice.reducer