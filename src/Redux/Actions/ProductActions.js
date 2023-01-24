import axios from 'axios'

export const GetAllProduct=()=>{
    return  (dispatch,getState)=>{
        let state = getState()
        localStorage.setItem('totalArticle',0)
        let page = (state.Product.currentPageAPI+1)
        dispatch(({type:'NEXTPAGE'}))
        dispatch(({type:'LOADINGPRODUCT'}))
         axios
        .get(`https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=${page}`)
        .then((res) => {
            dispatch({type:'GETALLPRODUCT',allProduct:res.data.posts})
            dispatch({type:'ALLPRODUCTLOAD'})
        })
        .catch((err) => {
          console.log(err);
        });
    }
}