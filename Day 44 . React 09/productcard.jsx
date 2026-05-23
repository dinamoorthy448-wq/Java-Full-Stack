import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const ProductCard = () => {
  return (
    <Card
      sx={{
        width: 300,
        mt: 4,
      }}
    >
      <CardHeader title="Wireless Headphones" />

      <CardContent>
        <Typography variant="body1">
          High-quality sound with noise cancellation.
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          mt={2}
        >
          ₹2999
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained">
          Buy Now
        </Button>

        <Button variant="outlined">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;