const bookListActions ={
    addToList:"addToList",
    removeFromList:"removeFromList",
    emptyList:"emptyList"
};

function bookReducer(bookList, {type, item}){
    switch(type){
        case bookListActions.addToList:
            return [...bookList, item]        
        case bookListActions.removeFromList:
            let newList = bookList.slice()
            for (let bookItem of newList){
                if(bookItem.id === item.id){
                    newList.splice(newList.indexOf(bookItem),1)
                    return newList
                };
            }; return newList       
        case bookListActions.emptyList:
            return []
        default: 
            throw new Error('A unexpected error occured, please try again.')

    };

};

export {
    bookReducer,
    bookListActions
}