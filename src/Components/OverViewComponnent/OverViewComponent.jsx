import React, { useState } from 'react';
import TransActionForm from '../TransActionForm/TransActionForm';

const OverViewComponent = ({ income, expense }) => {

    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <div className='col-12 d-flex justify-content-between'>
                <p>balanse : {income - expense}</p>
                <button className='btn btn-sm btn-primary h-50'
                    onClick={() => setIsShow(prevState => !prevState)}>
                    {isShow ? 'Cancel' : 'Add'}
                    </button>
            </div>
            {isShow && <TransActionForm />}
            <div className='col-12 d-flex flex-column'>
                <div className='col-12 d-flex justify-content-between'>
                    <p>expense {expense}</p>
                    <p>income {income}</p>
                </div>
            </div>
        </>
    );
};

export default OverViewComponent;