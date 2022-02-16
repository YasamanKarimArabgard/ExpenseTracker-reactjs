import React, { useEffect, useState } from 'react';

const TransActionComponenet = ({ transActions, setTransActions }) => {


    const [searchItem, setSearchItem] = useState('');
    const [filtetdTnx, setFiltetdTnx] = useState(transActions)

    const filterTransation = (search) => {
        if (!search || search === '') {
            setFiltetdTnx(transActions)
            return;
        }
        const filtered = transActions.filter(t => t.desc.toLowerCase().includes(search.toLowerCase()));
        setFiltetdTnx(filtered)
    }

    const onChangeHandler = (e) => {
        setSearchItem(e.target.value);
        filterTransation(e.target.value)
    }

    const removehandler = (id) => {
        const remove = transActions.filter(t => t.id !== id)
        setTransActions(remove)
    }

    useEffect(() => {
        filterTransation(searchItem)
    }, [transActions])


    if (filtetdTnx.length == 0) return null;
    return (
        <section className='col-12 rounded border p-1 mt-2 d-flex flex-wrap justify-content-evenly'>
          <div className='col-12 d-flex justify-content-evenly align-items-end mb-1 mt-2'>
          <h6 className='text-secondary'>Search :</h6>
          <input type='text'
                className='form-control w-75'
                onChange={onChangeHandler}
                placeholder='Type here...'></input>
          </div>
            {filtetdTnx.map(t => (
                <div key={t.id} className={`col-12 d-flex justify-content-between align-items-center my-1
                 ${t.type === 'income' ? 'alert alert-success' : 'alert alert-danger'}`}>
                    {/* <div className='col-12 d-flex justify-content-between'> */}
                    <h6 className='col-4 text-start'>{t.desc}</h6>
                    <h6 className='col-4 text-center px-2'>{t.amount}$</h6>
                    {/* </div> */}
                    <i class="bi bi-trash3-fill text-danger col-4 text-end mb-2 mx-1" onClick={() => removehandler(t.id)}></i>
                </div>
            ))}
        </section>
    )
};

export default TransActionComponenet;