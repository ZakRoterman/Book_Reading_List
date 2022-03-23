import {useState} from 'react';
import AllBooks from '../components/AllBooks';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function BookBrowser() {
    
  return (
    <>
      <Typography variant='h3'>Browse</Typography>
      <Box sx={{display:"flex", alignContent:"center", justifyContent:"center", width:"100%"}}>
        
      </Box>

      <AllBooks/>
    </>
  )
}