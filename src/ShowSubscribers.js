
import Header from "./Common/Header";
import './ShowSubscribers.css';

import React, { Component } from 'react';

class ShowSubscribers extends Component {
    render() {
        return (
            <div className='component-body'> 
        
                <Header heading="phone directory" />
                <div className="component-body-container">
                    <button className='btn addBtn'>Add</button>
                    <div className='grid-container'>
                        <span className='grid-container'><strong>name</strong></span>
                        <span className='grid-container'><strong>phone</strong></span>
                   </div>

                    {
                        this.props.subscribersList.map (sub => {
                            return <div key={sub.id} className = 'grid-container'>
                                        <span className='grid-item'>{sub.name}</span>
                                        <span className='grid-item'>{sub.phone}</span>
                                        <span className='grid-item'><button className=' btn delBtn' >Delete</button></span>
                                    </div>
                        })
                    }
                </div>
           
            </div>
       );
    }
}

export default ShowSubscribers;