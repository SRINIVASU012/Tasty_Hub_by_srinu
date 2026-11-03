import { configureStore } from "@reduxjs/toolkit";
import productslice from "./productslice"
import cartslice from "./cartslice"
import wishlistslice from "./wishlistslice"
import orderslice from "./orderslice"
const store=configureStore({
    reducer:{
        product:productslice,
        cart:cartslice,
        wishlist:wishlistslice,
        order:orderslice
    }
})
export default store