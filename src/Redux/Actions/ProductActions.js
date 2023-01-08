import axios from 'axios'

export const GetAllProduct=()=>{
    return (dispatch)=>{
        dispatch(({type:'LOADINGPRODUCT'}))
        axios
        .get(`https://www.techinasia.com/wp-json/techinasia/2.0/posts`)
        .then((res) => {
            dispatch({type:'GETALLPRODUCT',allProduct:res.data})
            dispatch({type:'ALLPRODUCTLOAD'})
        })
        .catch((err) => {
          console.log(err);
        });
    }
}