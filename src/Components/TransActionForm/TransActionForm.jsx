import React, { useState } from 'react';

const TransActionForm = ({ addTransAction, setIsShow }) => {

    const [formValue, setFormValue] = useState({
        amount: '',
        desc: ''
    });

    const onChangeHandler = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addTransAction(formValue)
        setIsShow((prevState) => !prevState)
    }

    return (
        <form className='form-group border rounded my-2 d-flex flex-column p-1' onSubmit={submitHandler}>
            <div className='d-flex flex-column'>
                <input type='text'
                    name='desc'
                    className='form-control shadow-none mb-1'
                    onChange={onChangeHandler}
                    value={formValue.desc}
                    placeholder='description'
                    required
                />
                <input type='number'
                    name='amount' c
                    className='form-control shadow-none'
                    onChange={onChangeHandler}
                    value={formValue.amount}
                    placeholder='amount'
                    required
                />
            </div>
            <div className='d-flex align-items-center my-2 mx-1'>
                <label>
                    <input type='radio'
                        value='expense'
                        name='type'
                        onChange={onChangeHandler}
                        checked={formValue.type === 'expense'}
                        className='form-check-input mx-1'
                        placeholder='amount'
                        required></input>
                    Expense</label>
                <label>
                    <input type='radio'
                        value='income'
                        name='type'
                        onChange={onChangeHandler}
                        checked={formValue.type === 'income'}
                        className='form-check-input mx-1'
                        required
                    />
                    Income</label>
            </div>
            <button className='btn btn-sm btn-success 100 mb-1'>Add Transaction</button>
        </form>
    );
};

export default TransActionForm;