
// import AddSubscriber from "./AddSubscriber";
import React, { Component } from "react";
import ShowSubscribers from './ShowSubscribers';


class PhoneDirectory extends Component {
  constructor() {
    super();

    this.state = {
       subscribersList : [
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
    ]
    };
  }

  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }

    subscribersList.push(newSubscriber);
    this.setState({ subscriberList: subscribersList });
    console.log(this.state.subscribersList);
  };

  render() {
    const subscribersList = this.state.subscribersList;
    return (
      <div>
        {/* <AddSubscriber
          addSubscriberHandler={this.addSubscriberHandler.bind(this)}
        /> */}
        <ShowSubscribers subscribersList={subscribersList}  />
      </div>
    );
  }
}

export default PhoneDirectory;
