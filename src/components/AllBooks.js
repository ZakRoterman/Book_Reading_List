import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import useBooks from '../hooks/useGetBooks'
import {useNavigate} from 'react-router-dom';

export default function AllBooks() {
    const {books} = useBooks()
    const {addToList} = useContext(AppContext);
    const navigate = useNavigate();
    const handleAddToList =(item)=>{
        addToList(item)
      };
  return (
    <Box  display= 'grid' gap={1} gridTemplateColumns= "repeat(10, 1fr)">
      {books?.map((book) => (
        <Box key={book.id} gridColumn="span 2">
        <ImageListItem >
          <img
            src={book.img}
            srcSet={book.img}
            alt={book.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={book.author}
            subtitle={book.subject}
            actionIcon={
              <>
              <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${book.name}`}
                    onClick={()=>navigate('/books/'+book.id)}
                    >
                    <InfoIcon />
                    </IconButton>
              <IconButton
                color='primary'
                aria-label={`add to reading list`}
                onClick={()=>{handleAddToList(book)}}
              >
                <AddBoxIcon />
              </IconButton>
              </>
            }
            />
        </ImageListItem>
            </Box>
      ))}
     </Box>
  );
};