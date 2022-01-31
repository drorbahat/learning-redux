import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: true
    },
    reducers: {
        toogleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode
        },
    },
})

export const { toogleDarkMode } = themeSlice.actions

export default themeSlice.reducer