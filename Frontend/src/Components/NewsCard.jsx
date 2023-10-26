import Demo from '../assets/4.jpg'

const NewsCard = () => {
    return (
        <div className='flex items-center justify-center w-full h-[600px] object-cover px-[60px] pb-9'>
            <img src={Demo} alt="news_pic" className='w-full h-full'/>
        </div>
    );
};

export default NewsCard;