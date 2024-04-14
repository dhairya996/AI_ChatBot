import React from 'react'

const AdminPage = () => {
    const handleDownload = (fileName) => {
        const folderPath = '../../flask_server/sales_data/';
        const fileUrl = folderPath + fileName;
      
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
      
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
  return (
    <div>
        <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-6 rounded-t-xl mb-5">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white"> Hello Admin!!</h1>
                <p className="mt-2 text-lg text-white"> The CSV files containing data regarding user feedback, and new queries which the chatbot was unable to answer can be found here.</p>
                <div className="flex justify-center mt-4">
                </div>
            </div>
            
        </header>
        <div className='flex flex-row items-center justify-center'> 
        <img className="rounded-full h-[50px] w-[50px]" src="https://logowik.com/content/uploads/images/csv-file-format8052.jpg" alt="CSV_Image" />
        <div className='ml-5'> feedback.csv </div>
        </div>
        <button className="btn btn-block mt-5 mb-5 bg-blue-500" onClick={() => handleDownload('feedback.csv')}>
            Download Feedback Data
        </button>
        <div className='flex flex-row items-center justify-center'> 
            <img className="rounded-full h-[50px] w-[50px]" src="https://logowik.com/content/uploads/images/csv-file-format8052.jpg" alt="CSV_Image" />
            <div className='ml-5'> newquery.csv </div>
        </div>
        <button className="btn btn-block mt-5 mb-5 bg-blue-500" onClick={() => handleDownload('newquery.csv')}>
            Download New Query Data
        </button>
    </div>
  )
}

export default AdminPage