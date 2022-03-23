import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import AllBooks from './components/AllBooks';
import Rate from './components/Rate';
import ButtonGroup from './components/ButtonGroup';
import Button from './components/Button';
import readingTheme from './themes/readingTheme';
import {getLogin } from './api/apiLogin';
import { putUser } from './api/apiUser';
import {CancelToken} from 'apisauce';
import NavBar from './components/NavBar';
import Logout from './views/Logout';
import Login from './views/Login';
import BookBrowser from './views/BookBrowser';
import ReadingList from './views/ReadingList';
import { Route, Routes } from 'react-router-dom';
import Book from './components/Book'

let a_token =process.env.theToken

const handleClick = async () => {
  const source = CancelToken.source();
  const response_object = await putUser(a_token,{password:'abc'},source.token);
  console.log(response_object)
}

function App() {
  return (
    <>
      <ThemeProvider theme={readingTheme}>
        <NavBar/>   
          <Routes>     
          <Route path="/books" element={<BookBrowser/>}/> 
          <Route path='/books/:bookId' element={<Book/>}/>
          <Route path="/my-list" element={<ReadingList/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          </Routes>    
      </ThemeProvider>
    </>
  );
}

export default App;
