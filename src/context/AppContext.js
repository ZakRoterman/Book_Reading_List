import {createContext, useState, useReducer, useEffect} from "react";
import {bookReducer, bookListActions} from "../reducers/bookReducer";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    const getUserFromLS=()=>{
        let user = localStorage.getItem('user');
        if(user){
            return JSON.parse(user)
        }
    }

    const getBookListFromLS=()=>{
        let bookList = localStorage.getItem('book');
        if(bookList){
            return JSON.parse(bookList)
        };
        return []
    };

    const [user, _setUser]=useState(getUserFromLS());
    const [book, setBook]=useState({});
    const [bookList, dispatch] = useReducer(bookReducer,getBookListFromLS())

    useEffect(
        () =>{
            localStorage.setItem('bookList', JSON.stringify(bookList))

        },
        [bookList]
        )
    
    const values={
        user,
        setUser:(user)=>{
            localStorage.setItem('user',JSON.stringify(user))
            _setUser(user)
        },
        book,
        setBook,
        bookList,
        addToList:(item)=>{
            dispatch({type: bookListActions.addToList, item})
        },
        removeFromList:(item)=>{
            dispatch({type: bookListActions.removeFromList, item})
        },
        empytList:()=>{
            dispatch({type: bookListActions.emptyList})
        },
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider