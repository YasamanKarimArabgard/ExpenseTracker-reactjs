import React from 'react';

const TransActionComponenet = ({ transActions, setTransActions }) => {


    const removehandler = (id) => {
        const remove = transActions.filter(t => t.id !== id)
        setTransActions(remove)
    }

    if (transActions.length == 0) return null;
    return (
        <section className='col-12 rounded border p-1 mt-2 d-flex flex-wrap justify-content-evenly'>
            {transActions.map(t => (
                <div key={t.id} className={`col-5 d-flex flex-column align-items-end
                 ${t.type === 'income' ? 'alert alert-success' : 'alert alert-danger'}`}>
                    <div className='col-12 d-flex justify-content-between'>
                        <h6>{t.desc}</h6>
                        <h6>{t.amount}$</h6>
                    </div>
                    <i class="bi bi-trash3-fill text-danger" onClick={() => removehandler(t.id)}></i>
                </div>
            ))}
        </section>
    )
};

export default TransActionComponenet;