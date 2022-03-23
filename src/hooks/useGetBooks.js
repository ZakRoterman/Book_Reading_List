import {useEffect, useState, useContext} from 'react'
import {getBooks} from '../api/apiBook';
import {CancelToken} from 'apisauce'

export default function useBooks() {
  const [books, setBooks] = useState([])
  
  useEffect(
      ()=>{
        const source = CancelToken.source();
        const getCats=async()=>{
            const response = await getBooks(source.token)
            setBooks(response)
        }
        getCats()
        return ()=>{source.cancel();}


      },
      []
  )

  return books
}