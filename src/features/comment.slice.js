import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    comment: [],
    error: null,
    loading: false
}


export const getComments = createAsyncThunk("comment/get", async (data, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:4000/comments")
        const comments = res.json()
        if(comments.error) {
            return thunkAPI.rejectWithValue(comments.error)
        }
        return comments

    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const addComments = createAsyncThunk("comment/post", async (data, thunkAPI) => {
try {
    const res = await fetch("http://localhost:4000/createNews", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: data,
            newsId: data,
            user: data,
        })
    })
    const comment = await res.json()
    if(comment.error) {
        return thunkAPI.rejectWithValue(comment.error)
    }
    return thunkAPI.fulfillWithValue(comment)

} catch (error) {
    return thunkAPI.rejectWithValue(error.massage)
}

})




const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (bilder) => {
        bilder
        .addCase(getComments.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        .addCase(getComments.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload
        })
        .addCase(getComments.fulfilled, (state, action) => {
            state.loading = false
            state.comment = action.payload
        })
        
    }
})

export default userSlice.reducer