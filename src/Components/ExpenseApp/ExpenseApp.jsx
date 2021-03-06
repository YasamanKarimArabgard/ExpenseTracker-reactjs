import React, { useEffect, useState } from 'react';
import TransActionComponenet from '../TransActionComponent/TransActionComponenet';
import OverViewComponent from '../OverViewComponnent/OverViewComponent';

const ExpenseApp = () => {

    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transActions, setTransActions] = useState([]);

    useEffect(() => {
        let exp = 0;
        let inc = 0;
        transActions.forEach(t => t.type === 'expense' ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount)))
        setExpense(exp)
        setIncome(inc)
    }, [transActions])

    const addTransAction = (formValue) => {
        console.log(formValue);
        setTransActions([...transActions, { ...formValue, id: Date.now() }])
    }

    return (
        <section className='col-11 col-sm-4 bg-white border rounded mt-3 p-1'>
            <div className='col-12 d-flex justify-content-between align-items-center'>
                <h3 className='text-center'>Dashboard</h3>
                <a href='https://github.com/YasamanKarimArabgard' className='text-black'>
                    <i class="bi bi-person-circle mx-1" />
                </a>
            </div>
            <div className='rounded p-1'>
                <OverViewComponent expense={expense}
                    income={income}
                    addTransAction={addTransAction} />
            </div>
            <TransActionComponenet transActions={transActions} setTransActions={setTransActions} />
        </section>
    );
};

export default ExpenseApp;