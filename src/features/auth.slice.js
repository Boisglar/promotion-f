import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import $api from "./http";

const initialState = {
    user: [],
    allUsers: [],
    isAuth: false,
    loading: false,
    error: null
}

export const registration = createAsyncThunk(
    'user/registration',
    async (data, thunkAPI) => {
        try {
            const { email, password, firstName, lastName } = data
            const res = await $api.post('/registration', { email, password, firstName, lastName })
            localStorage.setItem('token', res.data.accessToken)
            return thunkAPI.fulfillWithValue(res.data.user)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)

export const login = createAsyncThunk(
    'user/login',
    async (data, thunkAPI) => {
        try {
            const { email, password } = data
            const res = await $api.post('/login', {email, password})
            localStorage.setItem('token', res.data.accessToken)
            return thunkAPI.fulfillWithValue(res.data.user)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async (data, thunkAPI) => {
        try {
            await $api.post('/logout')
            localStorage.removeItem('token')
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)

export const checkAuth = createAsyncThunk(
    'user/check',
    async (data, thunkAPI) => {
        try {
            const res = await $api.get('/refresh')
            localStorage.setItem('token', res.data.accessToken)
            return thunkAPI.fulfillWithValue(res.data.user)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)


const authSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersState(state, action) {
            state.allUsers = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(registration.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.loading = false
                state.isAuth = true
                state.user = action.payload
            })
            .addCase(login.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.isAuth = true
                state.user = action.payload
            })
            .addCase(logout.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false
                state.isAuth = false
                state.user = null
            })
            .addCase(checkAuth.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.loading = false
                state.isAuth = true
                state.user = action.payload
            })
    }
})

export const { usersState } = authSlice.actions;

export default authSlice.reducer