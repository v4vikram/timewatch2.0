import axiosInstance from "@/lib/axiosInstance";
const { create } = require("zustand")


export const useProductsStore =  create((set, get) => ({
    products: [],

    getProducts: async () => {
        const res = await axiosInstance.get('/product');
        set({ products:res?.data?.products })
    },
    // clearCache: () =>{

    // }
}))