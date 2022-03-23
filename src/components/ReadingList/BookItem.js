import React, {useEffect, useState, useContext} from 'react'
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useTheme} from '@mui/material/styles';
import BookCard from './BookCard';
import { AppContext } from '../../context/AppContext';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary : theme.palette.primary,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  export default function BookItem({item}) {
    const theme = useTheme();
    const {bookList} = useContext(AppContext);
    const [qty,setQty]=useState(bookList.filter((bookItem)=>bookItem.id === item.id).length)

    useEffect(
        ()=>{
            setQty(bookList.filter((bookItem)=>bookItem.id === item.id).length)
        },[bookList, item]
    )
    
  return (
    <Grid container spacing={2} sx={{m:1, pr:2, border: '1px solid', borderRadius:1, alignItems:"stretch"}}>
        <Grid item md={4} sm={6} xs={12}>
            {console.log(theme)}
            <Item sx={{height:'100%'}}>
                <Avatar alt={item.name} sx={{height:'100%', width:"100%"}} variant="rounded" src={item.img}/>
            </Item>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
            <Item sx={{height:'100%'}}>
                <BookCard item={item}/>
            </Item>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
            <Item sx={{height:'100%'}}>
                <div>
                <strong>Total</strong>
                <br/>
                ${(item.price*qty).toFixed(2)}
                </div>
            </Item>
        </Grid>
        
    </Grid>
  )
}