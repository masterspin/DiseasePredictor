import React from 'react';

type footerProps = {
    
};

const footer:React.FC<footerProps> = () => {
    
    return (
        <div className='fixed inset-x-0 bottom-0 pb-4'>
        <footer className="bg-black sticky bottom-0">
        <div className="container pt-0.5">
        </div>

        <div
            className="bg-white p-3 text-center text-black">
            © 2023 Copyright Bug Catchers
        </div>
        <div
            className="bg-white text-center text-black flex justify-center">
            <div className='text-center'>
            Developed By
            </div>
            <div className='text-center'>
            <a
            className="ml-1 pb-4 text-blue-800 font-semibold"
            href="https://www.linkedin.com/in/rjutur/"
            
            >Ritij Jutur</a>
            </div>
            <div className='text-center'>
            <a
            className="ml-1 pb-4 text-red-800 font-semibold"
            href="https://www.linkedin.com/in/rohitsar/"
            
            >Rohit Saripalle</a>
            </div>
            <div className='text-center'>
            <a
            className="ml-1 pb-4 text-green-800 font-semibold"
            href="https://www.linkedin.com/in/rjutur/"
            
            >Priya Gutta</a>
            </div>
        </div>
        </footer>
        </div>
        
    )
}
export default footer;