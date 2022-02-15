import React, { useState } from 'react';

const TransActionForm = () => {

    const [formValue, setFormValue] = useState({
        amount: 0,
        desc: ''
    });

    const onChangeHandler = (e) => {
        setFormValue({...formValue, [e.target.name] : e.target.value})
    }

    return (
        <form className='form-group'>
            <div className='d-flex flex-column'>
                <input type='text'
                    name='desc'
                    className='w-75'
                    onChange={onChangeHandler}
                    value={formValue.desc}
                />
                <input type='number'
                    name='amount' c
                    lassName='w-75'
                    onChange={onChangeHandler}
                    value={formValue.amount} />
            </div>
            <div className='d-flex align-items-center'>
                <input type='radio'
                    value='expense'
                    name='type'
                    onChange={onChangeHandler}
                    checked={formValue.type === 'expense'}
                />
                <label>expense</label>
                <input type='radio'
                    value='income'
                    name='type'
                    onChange={onChangeHandler}
                    checked={formValue.type === 'income'}
                />
                <label>income</label>
            </div>
            <button className='btn btn-sm btn-secondary'>Add Transaction</button>
        </form>
    );
};

export default TransActionForm;