import React from "react";
import Header from './Common/Header';
import './Common/common.css';
import './Styles/AddSubscriber.css'

class AddSubscriber extends React.Component {
    render() {
        return (
            <div className="component-body">
                <Header heading = "Add Subscriber" />
                <div className="component-body-container">
                    <button className="btn backBtn">Back</button>

                    <form action="" className="form-container">
                        <label htmlFor="name" className="form-label" >Name: </label>
                        <input type="text" id="name" className="form-input" name="name" /> <br /><br />
                        <label htmlFor="phone" className="form-label" >Phone: </label>
                        <input type="text" id="phone" className="form-input" name="phone" /> <br /><br />

                        <div className="info-container">
                            <span className="subscriber-add-heading">Subscriber To Be Added:</span><br />
                            <span className="subscriber-info">Name: </span><br />
                            <span className="subscriber-info">Phone: </span>
                        </div>

                        <button className="btn addBtn">Add</button>
                    </form>

                    
                </div>
            </div>
        )
    }
}

export default AddSubscriber;