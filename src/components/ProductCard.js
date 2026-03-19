import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia 
       component="img"
       height="200"
       image={product.image}
       alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.category}
        </Typography>
        <Typography variant="h6" color="primary">
          {product.cost}
        </Typography>
        <Rating name="read-only" value={product.rating} readOnly />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary" 
          className="button"
          fullWidth
          startIcon={<AddShoppingCartOutlined />}
          onClick={()=>handleAddToCart(product._id)}
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
