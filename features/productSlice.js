import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    latestJob: [],
    categoryList: [
        { id: 1, name: "Kurti", value: "kurti", isChecked: false, },
        { id: 2, name: "Saree", value: "saree", isChecked: false, },
        { id: 3, name: "Lehenga", value: "lehenga", isChecked: false, },
        { id: 4, name: "Gharara", value: "gharara", isChecked: false, },
        { id: 5, name: "Applique-Work", value: "applique", isChecked: false, },
        { id: 6, name: "Mukesh-Work", value: "mukesh", isChecked: false, },
    ],
    colorList: [
        { id: 1, name: "Black", value: "black", isChecked: false, },
        { id: 2, name: "Blue", value: "blue", isChecked: false, },
        { id: 3, name: "Gray", value: "gray", isChecked: false, },
        { id: 4, name: "Green", value: "green", isChecked: false, },
        { id: 5, name: "Red", value: "red", isChecked: false, },
        { id: 7, name: "Purple", value: "purple", isChecked: false, },
        { id: 8, name: "Parrot", value: "parrot", isChecked: false, },
        { id: 9, name: "White", value: "White", isChecked: false, },
        { id: 10, name: "Brown", value: "Brown", isChecked: false, },
    ],
    brandList: [
        { id: 1, name: "Applique", value: "applique", isChecked: false, },
        { id: 2, name: "Mukesh-work", value: "mukesh-work", isChecked: false, },
        { id: 3, name: "Balmain", value: "balmain", isChecked: false, },
        { id: 4, name: "Burberry", value: "burberry", isChecked: false, },
        { id: 5, name: "Chloe", value: "chloe", isChecked: false, }
    ]
}

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        clearCategoryToggle: (state) => {
            state?.categoryList?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },
        categoryCheck: (state, { payload }) => {
            state?.categoryList?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },

        clearColorToggle: (state) => {
            state?.colorList?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },
        colorCheck: (state, { payload }) => {
            state?.colorList?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearBrandToggle: (state) => {
            state?.brandList?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },
        brandCheck: (state, { payload }) => {
            state?.brandList?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },

    },
})

export const {
    clearCategoryToggle,
    categoryCheck,
    clearColorToggle,
    colorCheck,
    clearBrandToggle,
    brandCheck,
} = jobSlice.actions
export default jobSlice.reducer
