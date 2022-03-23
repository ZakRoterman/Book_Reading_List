import apiClientNoAuth from './clientNoAuth'
import apiClientTokenAuth from './clientTokenAuth'

const endpoint = '/user'

export const postUser = async(email,firstName,lastName,password, cancelToken)=>{
    const response = await apiClientNoAuth(cancelToken).post(endpoint,{email:email,first_name:firstName,last_name:lastName,password:password});
    return response.ok
}

export const putUser = async(token, data, cancelToken)=>{
    const response = await apiClientTokenAuth(token).put(endpoint,data);
    return response.ok
}

export const deleteUser = async(token, cancelToken)=>{
    const response = await apiClientTokenAuth(token).delete(endpoint);
    return response.ok
}