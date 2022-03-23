import {useEffect, useState } from 'react';
import {getBook} from '../api/apiBook';

import { CancelToken } from 'apisauce';

export default function useSingleBook(bookId) {
    const [book, setBook]=useState([]);
    
    useEffect(()=>{
        let source;
        source = CancelToken.source();
        (async()=>{
            const response = await getBook(bookId, source.token);
            setBook(response);
        })()
        return ()=>{source.cancel()}
    },[bookId]

    )
    return book
    }