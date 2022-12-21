import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: [],
    isAuth: false,
    loading: false,
    error: null
}

export const registration = createAsyncThunk(
    'user/registration',
    async (data, thunkAPI) => {
        try {
            const { email, password, firstName, lastName } = data
            console.log(email, password, firstName, lastName);
            const res = await fetch('http://localhost:4000/registration', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email, password, firstName, lastName })
            })
            const user = await res.json()
            if (user.message) {
                console.log(user.message);
                return thunkAPI.rejectWithValue(user.message)
            }
            localStorage.setItem('token', user.accessToken)
            return thunkAPI.fulfillWithValue(user)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk(
    'user/login',
    async (data, thunkAPI) => {
        try {
            const { email, password } = data
            const res = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            const user = await res.json()
            if (user.message) {
                console.log(user.message);
                return thunkAPI.rejectWithValue(user.message)
            }
            console.log(user.user);
            localStorage.setItem('token', user.accessToken)
            return thunkAPI.fulfillWithValue(user)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async (data, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/logout', {
                method: 'POST'
            })
            const token = await res.json()
            if (token.message) {
                console.log(token.message);
                return thunkAPI.rejectWithValue(token.message)
            }
            console.log(token);
            localStorage.removeItem('token')
            return thunkAPI.fulfillWithValue(token)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const checkAuth = createAsyncThunk(
    'user/check',
    async (data, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/refresh')
            const user = await res.json()
            console.log(user);
            if (user.message) {
                console.log(user.message);
                return thunkAPI.rejectWithValue(user.message)
            }
            localStorage.setItem('token', user.accessToken)
            return thunkAPI.fulfillWithValue(user)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const authSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
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

export default authSlice.reducer