import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productId: [],
  error: null,
  loading: false,
  active: false,
};

export const getCart = createAsyncThunk("cart/get", async (data, thunkAPI) => {
  try {
    const response = await fetch("http://localhost:4000/cart/get");
    const cart = await response.json();
    if (cart.error) {
      return thunkAPI.rejectWithValue(cart.error);
    }
    return thunkAPI.fulfillWithValue(cart);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addToCart = createAsyncThunk(
  "cart/post",
  async (productId, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4000/cart/post", {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({
          productId: productId,
        }),
      });
      const cart = await res.json();
      if (cart.error) {
        return thunkAPI.rejectWithValue(cart.error);
      }
      return thunkAPI.fullfillWithValue(cart);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCart = createAsyncThunk(
  "cart/patch",
  async (data, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4000/cart/patch", {
        method: "PATCH",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({
          type: data.type,
          count: data.count,
        }),
      });
      const cart = await res.json();
      if (cart.error) {
        return thunkAPI.rejectWithValue(cart.error);
      }
      return thunkAPI.fulfillWithValue(cart);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "cart/delete",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:4000/cart/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "aplication/json",
        },
      });
      const cart = await res.json();
      if (cart.error) {
        return thunkAPI.rejectWithValue(cart.error);
      }
      return thunkAPI.fullfillWithValue(cart);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartState(state, action) {
      state.active = !state.active;
    },
  },
  extreReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getcart.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.productId = action.payload;
        state.loading = false;
      })
      .addCase(addToCart.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.productId.push(action.payload);
        state.loading = false;
      })
      .addCase(updateCart.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.productId.map((item) => {
          if (item.productId === action.payload.productId) {
            item.count = action.payload.count;
            return true;
          }
          return true;
        });
        state.loading = false;
      })
      .addCase(deleteCart.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.productId = state.productId.filter(
          (item) => item.productId !== action.payload.productId
        );
        state.loading = false;
      });
  },
});

export const { cartState } = cartSlice.actions;

export default cartSlice.reducer;
