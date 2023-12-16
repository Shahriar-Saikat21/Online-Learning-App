import {Link} from 'react-router-dom'   

const PurchaseErrorPage = () => {
    return (
        <div className="flex flex-col w-full h-[100dvh] justify-center items-center md:max-w-[1460px] m-auto gap-3 ">
            <h1 className='text-lg font-primary mb-5'>Payment Unsuccess due to internal issues Please Try Later....</h1>
            <Link to='/student-Home' className='btnTwo text-center'>Go to Home</Link>
        </div>
    );
};

export default PurchaseErrorPage;