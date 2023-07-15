import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      {/* <button type="button" className="bg-indigo-500" disabled>
        <svg className="animate-spin h-5 w-5 " viewBox="0 0 24 24"></svg>
        Loading...
      </button> */}
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
    //     <div style={{ height: '400px' }} className=' d-flex justify-content-center align-items-center' >
    //     <Spinner animation="border" variant='primary'>
    //       {/* <span className="visually-hidden">Loading...</span> */}
    //     </Spinner>
    //   </div>
  );
};

export default Loader;
