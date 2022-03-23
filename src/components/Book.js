import React, {useEffect, useState, useContext} from 'react'
import useSingleBook from '../hooks/useSingleBook';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

  export default function MyBook() {      
      const {bookId} = useParams();

    const {book} = useSingleBook(bookId);
    
  return (   
      <>
        <Box key={book?.id} sx={{display:'flex', alignItems: 'center', justifyItems: 'center', alignContent:'center', justifyContent: 'center', my:2}}>
        <ImageListItem >
          <img
            src={book?.img}
            srcSet={book?.img}
            alt={book?.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={book?.author}
            subtitle={book?.subject}
            />
        </ImageListItem>
            </Box>
            <Box  sx={{display:'flex', alignItems: 'center', justifyItems: 'center', alignContent:'center', justifyContent: 'center'}}>
                {book?.summary}
            </Box>
            </>
  )
};