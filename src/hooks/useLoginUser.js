import {useEffect} from 'react';
import {getLogin} from  "../api/apiLogin";
import { CancelToken } from 'apisauce';

export default function useLogin(loginCreds, setError, setUser, setLoginCreds) {
  
  useEffect(
      ()=>{
        const source = CancelToken.source()
        const login=async()=>{
            const responseObject = await getLogin(loginCreds.email, loginCreds.password, source.token)
            if (responseObject.user?.token){
                console.log('logged in');
                setUser(responseObject.user);
                setError(responseObject.error);
                setLoginCreds({});
            }
        };

        if (loginCreds.email && loginCreds.password){
            login();
        };
        return ()=>{
            source.cancel()
        }


      },
      [loginCreds, setLoginCreds, setUser, setError]
        ) 
}