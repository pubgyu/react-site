import { useState,useEffect,useCallback } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [info,setInfo] = useState(null);
    let [mounted,setMounted] = useState(true);
    
    // fetch
    // const getMovieDetail = async() => {
    //     const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    //     console.log(response);
    //     const json = await (response).json();
        
    //     setInfo(json.data.movie);
    // }
    
    // axios
    const getMovieDetail = useCallback(() => {
        const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
        axios.get(url)
        .then((response) => {
            const json = response.data;
            if(mounted) setInfo(json.data.movie);
        })
    },[id,mounted]);
    
    useEffect(()=>{
        getMovieDetail();
        
        // unmount
        return () => setMounted(false);
    },[getMovieDetail]);
    
    if(info !== null) {
        if (info.id !== 0) {
            return (
                <>
                    <h1>{info.title}</h1>
                    <img src={info.large_cover_image}  alt={info.title} />
                </>
            )
        }else {
            return <h1>No Detail!</h1>
        }
    }else {
        return <h1>Detail Loading...</h1>;
    }
}
export default Detail;