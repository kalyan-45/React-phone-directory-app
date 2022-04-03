// import AddSubscriber from "./AddSubscriber";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowSubscribers from "./ShowSubscribers";
import AddSubscriber from "./AddSubscriber";

class PhoneDirectory extends Component {
  constructor() {
    super();

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

  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({ subscribersList: subscribersList });
    console.log(this.state.subscribersList);
  };

  deleteSubscriberHandler = (subscriberId) => {
    let subscribersList = this.state.subscribersList;
    let subscribersIndex = 0;
    subscribersList.forEach(function (subscriber, index) {
      console.log(subscriber);
      console.log(index);
      if (subscriber.id === subscriberId) {
        subscribersIndex = index;
      }
    }, this);
    let newSubscribersList = subscribersList;
    newSubscribersList.splice(subscribersIndex, 1);
    this.setState({ subscribers: newSubscribersList });
  };
  render() {
    const subscribersList = this.state.subscribersList;
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={(props) => (
              <ShowSubscribers
                {...props}
                subscribersList={this.state.subscribersList}
                deleteSubscriberHandler={this.deleteSubscriberHandler.bind(this)}
              />
            )}
          />

          <Route
            exact
            path="/add"
            render={({ history }, props) => (
              <AddSubscriber
                history={history}
                {...props}
                addSubscriberHandler={this.addSubscriberHandler}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default PhoneDirectory;
