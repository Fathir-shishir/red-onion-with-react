import React from 'react';

const AuthWithSocial = () => {
    return (
        <div >
        <div className='d-flex w-100 align-items-center'>
            <div style={{height : '1px'}} className='bg-primary w-50' > </div>
            <div>
                <p className='mt-2 px-2'>or</p>
            </div>
            <div style={{height : '1px'}} className='bg-primary w-50'></div>
        </div>
        <div>
            <button>
                Google Sign IN
            </button>
        </div>
            
        </div>
    );
};

export default AuthWithSocial;