import { useEffect, useContext } from 'react';
import { CancelToken } from 'apisauce';
import {deleteUser} from '../api/apiUser';
import {AppContext} from '../context/AppContext';

export default function useDeleteUser(theUser) {
    let response
    const {user} = useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const deleteTheUser=async()=>{
                response = await deleteUser(user.token, source.token);
                if (response){
                  console.log(response)
                }else if(response!==undefined && response === false){
                  console.log(response)
                }
            }
            if(theUser?.name){
                deleteTheUser();

            };
            return ()=>{source.cancel()}
        },[theUser]
    )

}