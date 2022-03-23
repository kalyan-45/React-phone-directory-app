import React from 'react';
import Header from "./Header";
import './App.css';
const App = () => {
    let subscribers = [
        {
            id : '1',
            name : "Kalyan",
            phone :'9637442375'
        },
        {
            id : '2',
            name : "Daya",
            phone :'9359040951'
        },

        {
            id : '3',
            name : "Prashant",
            phone :'8308310901' 
        },

        {
            id : '4',
            name : "Sushant",
            phone :'8308310902' 
        }
];
    return (
        <div className='wrapper'> 
            <Header heading="phone directory" />
            <div className="content">
                <button className='btn addBtn'>Add</button>
                <div className='grid-container'>
                    <span className='grid-container'><strong>name</strong></span>
                    <span className='grid-container'><strong>phone</strong></span>
               </div>

                {
                    subscribers.map (sub => {
                        return <div key={sub.id} className = 'grid-container'>
                            <span className='grid-item'>{sub.name}</span>
                            <span className='grid-item'>{sub.phone}</span>
                            <span className='grid-item'><button className=' btn delBtn'>Delete</button></span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default App;