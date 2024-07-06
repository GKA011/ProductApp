import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Addproduct = () => {
  
   return (
    
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      backgroundImage:'url(https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg)',
      backgroundSize:'o',
      backgroundPosition:'center',
      padding:'2px',
      borderRadius:'80px'
  
    }}
    noValidate
    autoComplete="off"
    >
    <h1>Product Details</h1>  
    <style>
      
    </style>
      
      <div>   
      <TextField
        required
        id="outlined-required"
        label="Product Name" 
     
      />
      </div>
      <div>
      <TextField
        id="outlined-disabled"
        label="Description"
      
      />
      </div>
      <div>
      <TextField
        id="outlined-password-input"
        label="Price"
     
      />
      </div>
      <div>
      <TextField
        id="outlined-read-only-input"
        label="Category" 
     
   />
   <div>
      <Button variant='contained'>ADD</Button>
      <br></br>
  
   </div>

      
  </div>
</Box>


  )

}
export default Addproduct