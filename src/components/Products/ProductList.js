import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TextField, Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    (minPrice === '' || product.price >= parseFloat(minPrice)) &&
    (maxPrice === '' || product.price <= parseFloat(maxPrice))
  );

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <TextField
            label="Min Price"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <TextField
            label="Max Price"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {filteredProducts.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{product.title}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="body2">Price: ${product.price}</Typography>
                <Link to={`/products/${product.id}`}>View Details</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default ProductList;
