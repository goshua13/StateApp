
import React from 'react';

const Buttons = ({toggleStuff}) => {

    return (
        <div className='container'>
             <div className='text-center'>
                <div className='btn-group'>
                    <button className='btn btn-primary nav-item' onClick={() => toggleStuff('utah')}>Utah</button>
                    <button className='btn btn-info' onClick={() => toggleStuff('california')}>California</button>
                    <button className='btn btn-success' onClick={() => toggleStuff('texas')}>Texas</button>
                    <button className='btn btn-warning' onClick={() => toggleStuff('newjersey')}>New Jersey</button>
                    <button className='btn btn-secondary' onClick={() => toggleStuff('idaho')}>Idaho</button>
                    <button className='btn btn-dark' onClick={() => toggleStuff('newyork')}>New york</button>
                </div>
            </div>
          </div>
        
    );
}

export default Buttons;
