import React, { useState } from 'react';
import TransActionForm from '../TransActionForm/TransActionForm';

const OverViewComponent = ({ income, expense, addTransAction }) => {

    const [isShow, setIsShow] = useState(false);

return (
    <>
        <div className='col-12 d-flex justify-content-between mt-1 align-items-center'>
            <h5 className='text-secondary mx-2'>Balanse : {income - expense}</h5>
            <button className={`btn btn-sm h-50 ${isShow ? 'btn-outline-danger' : 'btn-primary'}`}
                onClick={() => setIsShow(prevState => !prevState)}>
                {isShow ? 'Cancel' : 'Add'}
            </button>
        </div>
        {isShow && <TransActionForm addTransAction={addTransAction} setIsShow={setIsShow} />}
        <div className='col-12 d-flex flex-column my-2'>
            <div className='col-12 d-flex justify-content-between'>
                <div className='col-6 border rounded p-2 d-flex justify-content-between'>
                    <h6>Income</h6>
                    <h6 className='text-success'>{income}$</h6>
                </div>
                <div className='col-6 border rounded p-2 d-flex justify-content-between'>
                    <h6>Expense</h6>
                    <h6 className='text-danger'>{expense}$</h6>
                </div>
            </div>
        </div>
    </>
);
};

export default OverViewComponent;