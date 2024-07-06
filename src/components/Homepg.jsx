import { CardContent,Button,Card,Typography,CardActions, Grid,Box, CardMedia} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Homepg = () => {
   const[products,setProducts]=useState([])
        useEffect(()=>{
          axios.get('https://fakestoreapi.com/products').then((res)=>{
              setProducts(res.data)
          })
        },[])
  return (
   <Box sx={{ width: '%', padding:'1%',backgroundColor:"orange", borderRadius:"80px"}}>
   <h1>Product List</h1>
   <Grid container spacing={3}>
       {products.map((product, index)=>(
       <Grid item xs={12} sm={6} md={4} key={index}>
       <Card sx={{ minWidth: 275, margin:'auto' }}>
       <CardMedia
        component="img"
        height="auto"
        alt={product.image}
        image={product.image}
      />
       <CardContent>
           <Typography variant="h5" component="div">
           <b>Title: </b>{product.title}
           </Typography>
           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           <b>Dscription: </b>{product.description}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="text.secondary">
           <b>Price: </b>{product.price}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="text.secondary">
           <b>Category: </b>{product.category}
           </Typography>
     </CardContent>
     <CardActions>
       <Button variant='contained' >UPDATE</Button>
       <Button variant='contained' >DELETE</Button>
     </CardActions>
 </Card>
 </Grid>
     ))}
 
 </Grid>
 </Box>

     )
}

export default Homepg