import PDFFile from '../Components/PDFFile'
import {Navigate} from 'react-router-dom'
import { Margin, usePDF } from "react-to-pdf";


const PDFDownloadPage = () => {
    const { toPDF, targetRef } = usePDF({
        filename: "Certificate_from_learnHub.pdf",
        page: { margin: Margin.MEDIUM }
    });

    if(!localStorage.getItem("token") && sessionStorage.getItem("status")!=="student"){
        return <Navigate to='/login' />
    }
    
    return (
        <div className="flex flex-col justify-start items-center pt-[80px] w-full h-[100dvh]">

            <button className="btnTwo" onClick={toPDF} >Download Certificate</button>
            <div ref={targetRef}>
                <PDFFile />
            </div>      

        </div>
    );
};

export default PDFDownloadPage;