import { Search, SentimentDissatisfied } from "@mui/icons-material";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { config } from "../App";
import Footer from "./Footer";
import Header from "./Header";
<<<<<<< ours
import ProductCard from "./ProductCard";
import "./Products.css";

// Definition of Data Structures used
/**
 * @typedef {Object} Product - Data on product available to buy
 * 
 * @property {string} name - The name or title of the product
=======
import "./Products.css";


/**
 * @typedef {Object} CartItem -  - Data on product added to cart
 * 
 * @property {string} name - The name or title of the product in cart
 * @property {string} qty - The quantity of product added to cart
>>>>>>> theirs
 * @property {string} category - The category that the product belongs to
 * @property {number} cost - The price to buy the product
 * @property {number} rating - The aggregate rating of the product (integer out of five)
 * @property {string} image - Contains URL for the product image
<<<<<<< ours
 * @property {string} _id - Unique ID for the product
 */


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  // TODO: CRIO_TASK_MODULE_PRODUCTS - Fetch products data and store it
=======
 * @property {string} productId - Unique ID for the product
 */

const Products = () => {

>>>>>>> theirs
  /**
   * Make API call to get the products list and store it to display the products
   *
   * @returns { Array.<Product> }
   *      Array of objects with complete data on all available products
   *
   * API endpoint - "GET /products"
   *
   * Example for successful response from backend:
   * HTTP 200
   * [
   *      {
   *          "name": "iPhone XR",
   *          "category": "Phones",
   *          "cost": 100,
   *          "rating": 4,
   *          "image": "https://i.imgur.com/lulqWzW.jpg",
   *          "_id": "v4sLtEcMpzabRyfx"
   *      },
   *      {
   *          "name": "Basketball",
   *          "category": "Sports",
   *          "cost": 100,
   *          "rating": 5,
   *          "image": "https://i.imgur.com/lulqWzW.jpg",
   *          "_id": "upLK9JbQ4rMhTwt4"
   *      }
   * ]
   *
   * Example for failed response from backend:
   * HTTP 500
   * {
   *      "success": false,
   *      "message": "Something went wrong. Check the backend console for more details"
   * }
   */
<<<<<<< ours

  const performAPICall = async () => {
    setLoading(true);
    try{
      const response = await axios.get(`${config.endpoint}/products`);
      setProducts(response.data);
    }catch(err){
      enqueueSnackbar("Failed to fetch products. Please try again.",{variant:"error"});
    }
    setLoading(false);
  };
  useEffect(()=>{
    performAPICall();
  },[]);
  // TODO: CRIO_TASK_MODULE_PRODUCTS - Implement search logic
=======
  const performAPICall = async () => {
  };

>>>>>>> theirs
  /**
   * Definition for search handler
   * This is the function that is called on adding new search keys
   *
   * @param {string} text
   *    Text user types in the search bar. To filter the displayed products based on this text.
   *
   * @returns { Array.<Product> }
   *      Array of objects with complete data on filtered set of products
   *
   * API endpoint - "GET /products/search?value=<search-query>"
   *
   */
<<<<<<< ours
   const performSearch = async (text) => {
    try{
      if(!text) {
        performAPICall();
        return;
      }
      const response = await axios.get(`${config.endpoint}/products/search?value=${text}`);
      setProducts(response.data);
    } catch(err) {
      if (err.response && err.response.status === 404) {
        setProducts([]); // Clear products to show "No products found"
      } else {
        enqueueSnackbar("Search failed. Please try again.", { variant: "error" });
      }
    }
  };

  // TODO: CRIO_TASK_MODULE_PRODUCTS - Optimise API calls with debounce search implementation
=======
  const performSearch = async (text) => {
  };

>>>>>>> theirs
  /**
   * Definition for debounce handler
   * With debounce, this is the function to be called whenever the user types text in the searchbar field
   *
   * @param {{ target: { value: string } }} event
   *    JS event object emitted from the search input field
   *
   * @param {NodeJS.Timeout} debounceTimeout
   *    Timer id set for the previous debounce call
   *
   */
  const debounceSearch = (event, debounceTimeout) => {
<<<<<<< ours
    if(debounceTimeout){
      clearTimeout(debounceTimeout);
    }

    const newTimeout = setTimeout(()=>{
      performSearch(event.target.value);
    },500);
    setDebounceTimeout(newTimeout);
  };





=======
  };


  /**
   * Perform the API call to fetch the user's cart and return the response
   *
   * @param {string} token - Authentication token returned on login
   *
   * @returns { Array.<{ productId: string, qty: number }> | null }
   *    The response JSON object
   *
   * Example for successful response from backend:
   * HTTP 200
   * [
   *      {
   *          "productId": "KCRwjF7lN97HnEaY",
   *          "qty": 3
   *      },
   *      {
   *          "productId": "BW0jAAeDJmlZCF8i",
   *          "qty": 1
   *      }
   * ]
   *
   * Example for failed response from backend:
   * HTTP 401
   * {
   *      "success": false,
   *      "message": "Protected route, Oauth2 Bearer token not found"
   * }
   */
  const fetchCart = async (token) => {
    if (!token) return;

    try {
      // TODO: CRIO_TASK_MODULE_CART - Pass Bearer token inside "Authorization" header to get data from "GET /cart" API and return the response data
    } catch (e) {
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar(
          "Could not fetch cart details. Check that the backend is running, reachable and returns valid JSON.",
          {
            variant: "error",
          }
        );
      }
      return null;
    }
  };


  // TODO: CRIO_TASK_MODULE_CART - Return if a product already exists in the cart
  /**
   * Return if a product already is present in the cart
   *
   * @param { Array.<{ productId: String, quantity: Number }> } items
   *    Array of objects with productId and quantity of products in cart
   * @param { String } productId
   *    Id of a product to be checked
   *
   * @returns { Boolean }
   *    Whether a product of given "productId" exists in the "items" array
   *
   */
  const isItemInCart = (items, productId) => {
  };

  /**
   * Perform the API call to add or update items in the user's cart and update local cart data to display the latest cart
   *
   * @param {string} token
   *    Authentication token returned on login
   * @param { Array.<{ productId: String, quantity: Number }> } items
   *    Array of objects with productId and quantity of products in cart
   * @param { Array.<Product> } products
   *    Array of objects with complete data on all available products
   * @param {string} productId
   *    ID of the product that is to be added or updated in cart
   * @param {number} qty
   *    How many of the product should be in the cart
   * @param {boolean} options
   *    If this function was triggered from the product card's "Add to Cart" button
   *
   * Example for successful response from backend:
   * HTTP 200 - Updated list of cart items
   * [
   *      {
   *          "productId": "KCRwjF7lN97HnEaY",
   *          "qty": 3
   *      },
   *      {
   *          "productId": "BW0jAAeDJmlZCF8i",
   *          "qty": 1
   *      }
   * ]
   *
   * Example for failed response from backend:
   * HTTP 404 - On invalid productId
   * {
   *      "success": false,
   *      "message": "Product doesn't exist"
   * }
   */
  const addToCart = async (
    token,
    items,
    products,
    productId,
    qty,
    options = { preventDuplicate: false }
  ) => {
  };
>>>>>>> theirs


  return (
    <div>
      <Header>
<<<<<<< ours
        {/* TODO: CRIO_TASK_MODULE_PRODUCTS - Display search bar in the header for Products page */}

      </Header>

      {/* Search view for mobiles */}
      <TextField
        fullWidth
        sx={{
          position:{
            xs:'relative',
            md:'absolute',
          },
          width:{
            xs:'100%',
            md:'30%'
          },
          top:{md:'0.3%'},
          left:{md:"50%"},
          transform:{md:'translateX(-50%)'}
        }}
=======

      </Header>

      <TextField
        className="search-mobile"
        size="small"
        fullWidth
>>>>>>> theirs
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search color="primary" />
            </InputAdornment>
          ),
        }}
        placeholder="Search for items/categories"
        name="search"
<<<<<<< ours
        onChange={(e)=>debounceSearch(e, debounceTimeout)}
      />
       <Grid container>
         <Grid item className="product-grid">
           <Box className="hero">
             <p className="hero-heading">
               India’s <span className="hero-highlight">FASTEST DELIVERY</span>{" "}
               to your door step
             </p>
           </Box>
           
         </Grid>
       </Grid>
       {loading ? (
       <Box display="flex" justifyContent="center" alignItems="center">
       <CircularProgress />
       <p>Loading products...</p>
     </Box>
       ):(
        <Grid container spacing={2} sx={{padding:"30px 30px"}}>
        {products.length ? (
          products.map((product)=> (
          <Grid item xs={12} sm={6} md={3} key={product._id}>
            <ProductCard product={product}/>
          </Grid>
          ))
        ):(
          <Box display="flex" justifyContent="center" alignItems="center" height="200px">
            <SentimentDissatisfied />
            <p>No products found</p>
          </Box>
        )}
       </Grid>
       )}
       
=======
      />
        {/* TODO: CRIO_TASK_MODULE_CART - Display the Cart component */}
>>>>>>> theirs
      <Footer />
    </div>
  );
};

export default Products;
