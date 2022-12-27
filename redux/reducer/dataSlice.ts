import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { config } from "process";

export type DataState = {
    data: {
        "editor's choice": string[] | any,
        "latest articles": string[] | any,
        "latest review": string[] | any
    },
    pending: boolean,
    error: boolean,

}

const initialState: DataState = {
    data: {
        "editor's choice": [
            {
                editor: "wahyu budi",
                role: "associate editor",
                product: {
                    "name": "Y.O.U Makeups",
                    "rating": 4.1,
                    "description": "Rouge Velvet Matte Lip Cream",
                    "image": "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
                }
            }
        ],
        "latest articles": [
            {
                "title": "TESING Brush dan Alat Makeup Yang Paling Sering Digunakan",
                "author": "TESING celle",
                "image": "https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg",
                "published_at": "4 hours ago"
            }
        ],
        "latest review": [
            {
                user: "wahyu budii utomo",
                profile: [
                    "Oily",
                    "Medium Dark",
                    "Warm",
                    "19 - 24"
                ],
                product: {
                    "image": "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
                    "name": "Tony Moly",
                    "desc": "Delight Tony Tint"
                },
                star: 3,
                comment: "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi"
            }
        ]
    },
    pending: false,
    error: false
}

export const getData = createAsyncThunk('data', async () => {
    const response = await axios.get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp');
    
    return response.data; 
});

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getData.pending, state => {
            state.pending = true;
        })
        .addCase(getData.fulfilled, (state:any, { payload }) => {
            state.pending = false;
            state.data = payload;
        })
        .addCase(getData.rejected, state => {
            state.pending = false;
            state.error = true;
        });
    },
})

export const selectData = (state: RootState) => state.data

export default dataSlice.reducer