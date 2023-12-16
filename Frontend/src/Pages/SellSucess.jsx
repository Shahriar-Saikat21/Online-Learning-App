import axios from 'axios';
import { useParams , useNavigate} from 'react-router-dom';

const compliteProcess = async (data) => {
    return await axios.post(`http://localhost:3000/sellSucess`,data,{
        withCredentials: true,
    });
};

const SellSucess = () => {
    const {courseId,sellerId,price} = useParams();
    const navigate = useNavigate();
    const complite = async (courseId,sellerId,price) => {
        const data = {
            courseId : courseId,
            sellerId : sellerId,
            productPrice : price
        }
        const result = await compliteProcess(data);
        if(result.data.success){
            navigate('/student-profile');
        }else{
            alert(result.data.message);
            navigate('/student-profile');
        }
    }
    return (
        <div className="flex flex-col w-full h-[100dvh] justify-center items-center md:max-w-[1460px] m-auto gap-3 ">
            <h1 className='text-lg font-primary mb-5'>Payment Received.... Click the FINISH button to complete the purchase</h1>
            <button className='btnTwo' onClick={()=> complite(courseId,sellerId,price)}>Finish Purchase Procress</button>
        </div>
    );
};

export default SellSucess;