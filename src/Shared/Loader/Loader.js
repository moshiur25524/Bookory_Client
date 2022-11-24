import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
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