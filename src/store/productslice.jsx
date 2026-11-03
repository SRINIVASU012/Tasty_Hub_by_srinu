import { createSlice } from "@reduxjs/toolkit";

const productslice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        name: "Chicken Biryani",
        category: "Biryani",
        price: 250,
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
        description: "Delicious spicy chicken biryani.",
      },
      {
        id: 2,
        name: "Veg Biryani",
        category: "Biryani",
        price: 180,
        rating: 4.2,
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
        description: "Fresh vegetable biryani.",
      },
      {
        id: 3,
        name: "Chicken Pizza",
        category: "Pizza",
        price: 299,
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        description: "Delicious pizza with cheese and chicken.",
      },
      {
        id: 4,
        name: "Veg Burger",
        category: "Burger",
        price: 120,
        rating: 4.1,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        description: "Fresh vegetable burger.",
      },
      {
        id: 5,
        name: "French Fries",
        category: "Snacks",
        price: 99,
        rating: 4.3,
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",
        description: "Crispy golden french fries.",
      },
      {
        id: 6,
        name: "Chocolate Cake",
        category: "Desserts",
        price: 150,
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        description: "Rich chocolate cake.",
      },
      {
        id: 7,
        name: "Chicken Burger",
        category: "Burger",
        price: 199,
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        description: "Juicy chicken burger.",
      },
      {
        id: 8,
        name: "Masala Dosa",
        category: "South Indian",
        price: 80,
        rating: 4.4,
        image:
          "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        description: "Crispy masala dosa.",
      },
      {
        id: 9,
        name: "Paneer Butter Masala",
        category: "Curry",
        price: 220,
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
        description: "Creamy paneer butter masala.",
      },
      {
        id: 10,
        name: "Cold Coffee",
        category: "Drinks",
        price: 110,
        rating: 4.3,
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
        description: "Refreshing cold coffee.",
      },
    ],
  },
  reducers: {
    addproduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateproduct: (state, action) => {
    var ind = state.products.findIndex(
        (obj) => obj.id == action.payload.id
    );

    if (ind != -1) {
        state.products[ind] = action.payload;
    }
},
 deleteproduct: (state, action) => {
    var ind = state.products.findIndex(
        (obj) => obj.id == action.payload
    );

    if (ind != -1) {
        state.products.splice(ind, 1);
    }
}
  },
 
});
export const { addproduct ,updateproduct,deleteproduct} = productslice.actions;
export default productslice.reducer;
