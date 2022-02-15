import React, { useState } from 'react';
import TransActionComponenet from '../TransActionComponent/TransActionComponenet';
import OverViewComponent from '../OverViewComponnent/OverViewComponent';

const ExpenseApp = () => {

    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transActios, setTransActions] = useState([]);

    return (
        <section className='col-5 bg-white border rounded mt-3 p-1'>
                 <OverViewComponent expense={expense} income={income}/>
                <TransActionComponenet transActios={transActios} />
        </section>
    );
};

export default ExpenseApp;