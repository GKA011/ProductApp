import React from 'react'
import { Button, Typography,Toolbar,Box,AppBar } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 10}} color={"Highlight"} fontFamily={"serif"} padding='20px'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div"  align='left' color='black' fontFamily={"serif"} sx={{ flexGrow: 10 }}>
            ProductApp
          </Typography>
          <Link to={'/'}> <Button style={{color:'black'}}><b>Addproduct</b></Button></Link>
        <Link to={'/view'}> <Button style={{color:'black'}}><b>Homepage</b></Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar