
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios.js'

export const fetchCards = createAsyncThunk('/cards', async (params) => {
	const { data } = await axios.post('/cards', params)
	return data;
})

export const fetchRemoveCard = createAsyncThunk('cards/fetchRemoveCard', async(id) => {
	axios.delete(`/cards/${id}`);
})

const initialState = {
	cards: {
		items: [],
		status: 'loading',
	}
}

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducer: {},
	extraReducers: {
		// додавання карток
		[fetchCards.pending]: (state, action) => {
			state.cards.items = [];
			state.cards.status = 'loading';
		},
		[fetchCards.fulfilled]: (state, action) => {
			state.cards.items = action.payload;
			state.cards.status = 'loaded';
		},
		[fetchCards.rejected]: (state) => {
			state.cards.items = [];
			state.cards.status = 'error';
		},
		// видалення карток
		[fetchRemoveCard.pending]: (state, action) => {
			state.cards.items = state.cards.items.filter(obj => obj._id === action.paylodad);
	
		},
		
	}
})

export const cardReducer = cardsSlice.reducer;