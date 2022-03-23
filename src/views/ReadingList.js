import {useContext} from 'react';
import UserBooks from '../components/UserBooks';
import Typography from '@mui/material/Typography';
import { AppContext } from '../context/AppContext';
import Box from '@mui/material/Box';

export default function BookBrowser() {
    const {bookList} = useContext(AppContext)

  return (
    <>
      <Typography variant='h3'>Your Reading List</Typography>
      <Box sx={{display:"flex", alignContent:"center", justifyContent:"center", width:"100%"}}>
        
      </Box>

      <UserBooks/>
    </>
  )
}