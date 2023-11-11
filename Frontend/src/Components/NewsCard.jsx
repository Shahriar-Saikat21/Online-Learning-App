
import {useState,useEffect} from 'react';
import axios from 'axios';

const NewsCard = () => {
    const [news,setNews] = useState("");
    useEffect(() => {
        axios.get("http://localhost:3000/displayNews").then((res) => {
            setNews(res.data[0].news_pic);
        }).catch((err) => {
            console.log(err);
        })
    },[]);
    return (
        <div className='flex items-center justify-center w-full h-[600px] object-cover px-[60px] pb-9'>
<<<<<<< HEAD
            <img src={"http://localhost:3000/Image/news_image/"+news} alt="news_pic" className='w-full h-full'/>
=======
            <img src={"http://localhost:3000/Image/"+news} alt="news_pic" className='w-full h-full'/>
>>>>>>> main
        </div>
    );
};

export default NewsCard;