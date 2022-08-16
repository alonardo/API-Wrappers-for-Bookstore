import { noAuth } from "./client.js";

const bookEndpoint = '/book'
//GET /book
export const getBook = async (bookID, cancelToken) =>{
    let error
    let book
    const response = await noAuth(cancelToken).get(bookEndpoint+'/'+bookID)
    if (response.ok){
        book = response.data
    }
    else{
        error = "Error!"  
    }
    return {
        error,
        book
    }
}