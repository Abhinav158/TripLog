// Import everything from actions as API 
import * as api from '../api';

// Now we have to create actions
// These are function which create actions 

export const getPosts = ()=> async(dispatch) => {

    try{
        //Try and fetch all the data from the API 
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data});
    }
    catch(error){
        console.log(error.message);
    }
    
}
export const createPost = (post)=> async(dispatch) => {
    console.log(post)

    try{ 
        const { data } = await api.createPost(post);
        console.log(data)
        dispatch({ type: 'CREATE', payload: data});
    }
    catch(error){
        console.log(error.message);
    }
    
}

export const updatePost = (id, post)=> async(dispatch) => {
    console.log(post)

    try{ 
        const { data } = await api.updatePost(id, post);
        console.log(data)
        dispatch({ type: 'UPDATE', payload: data});
    }
    catch(error){
        console.log(error.message);
    }
    
}


export const deletePost = (id)=> async(dispatch) => {
    

    try{ 
        await api.deletePost(id);
        dispatch({ type: 'DELETE', payload: id});
    }
    catch(error){
        console.log(error);
    }
    
}


export const likePost = (id)=> async(dispatch) => {
    

    try{ 
        const { data } = await api.likePost(id);

        dispatch({ type: "LIKE", payload: data });
    }
    catch(error){
        console.log(error);
    }
    
}




