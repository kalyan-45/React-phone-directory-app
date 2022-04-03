import React from "react";
import { Link } from "react-router-dom";
import Header from './Common/Header';
import './Common/common.css';
import './Styles/AddSubscriber.css'

class AddSubscriber extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            subscribersList: [
                {
                  id: "1",
                  name: "Kalyan",
                  phone: "9637442375",
                },
                {
                  id: "2",
                  name: "Daya",
                  phone: "9359040951",
                },
        
                {
                  id: "3",
                  name: "Prashant",
                  phone: "8308310901",
                },
        
                {
                  id: "4",
                  name: "Sushant",
                  phone: "8308310902",
                },
              ],
        };
    }
    inputChangedHandler = (event) => {
        const newState = this.state;
        newState[event.target.name] = event.target.value;
        this.setState(newState); 
        
    } 

    onFormSubmit = (event) => {
        event.preventDefault();
        

        this.props.addSubscriberHandler(this.state);
        
    }
    
    
    render() {
        const {name, phone} = this.state; 
        return (
            <div className="component-body">
                <Header heading = "Add Subscriber" />
                <div className="component-body-container">
                <Link to="/"><button className="btn backBtn">Back</button></Link>

                    <form action="" className="form-container" onSubmit={this.onFormSubmit.bind(this)}>
                        <label htmlFor="name" className="form-label" >Name: </label>
                        <input type="text" id="name" className="form-input" name="name" onChange={this.inputChangedHandler}/> <br /><br />
                        <label htmlFor="phone" className="form-label" >Phone: </label>
                        <input type="text" id="phone" className="form-input" name="phone" onChange={this.inputChangedHandler} /> <br /><br />

                        <div className="info-container">
                            <span className="subscriber-add-heading">Subscriber To Be Added:</span><br />
                            <span className="subscriber-info">Name: {name} </span><br />
                            <span className="subscriber-info">Phone: {phone} </span>
                        </div>

                        <button className="btn addBtn" >Add</button>
                    </form>

                    
                </div>
            </div>
        )
    }
}

export default AddSubscriber;