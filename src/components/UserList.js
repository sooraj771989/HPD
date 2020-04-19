import React, { Component } from "react";
import UserItem from "./UserItem";
import { getRandomUsers } from "./User";
import loading from "./../assets/img/loading.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import previousIcon from "./../assets/img/prev.png";
import nextIcon from "./../assets/img/next.png";

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true };
  }

  componentDidMount() {
    getRandomUsers(5).then(data => {
      this.setState({
        users: data,
        fetching: false
      });
    });
  }

  nextUsers = () => {
    getRandomUsers(5).then(data => {
      this.setState({
        users: data,
        fetching: false
      });
    });
  };

  prevUsers = () => {
    getRandomUsers(5).then(data => {
      this.setState({
        users: data,
        fetching: false
      });
    });
  };

  renderUserItems() {
    return this.state.users.map((user, index) => {
      const first = user.name.first;
      const last = user.name.last;
      const city = user.location.city;
      const pincode = user.location.postcode;
      const emailid = user.email;
      const mobile = user.phone;
      const dob = user.dob.date;
      return (
        <UserItem
          key={first + last + index}
          title={user.name.title}
          firstName={first}
          lastName={last}
          city={city}
          pincode={pincode}
          emailid={emailid}
          mobile={mobile}
          dob={dob}
        />
      );
    });
  }

  render() {
    if (this.state.fetching) {
      //show loader
      return (
        
        <div className="header mx-auto w-11/12 lg:w-10/12 py-10 px-10 user-div justify-center">
          <div className="flex flex-col justify-center">
            <img alt="loading-img" src={loading} className="loading-icon" />
            <p className="text-xl">Loading .... </p>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
       
        <div className="px-4 flex py-4 bg-blue items-end">
          <div className="container mx-auto flex flex-wrap justify-between items-end md:w-10/12">
            <div className="">
              <h2 class="text-white text-title">
                Healthcare Provider Documents
              </h2>
              <p className="text-subtitle text-left">
                Documents shared by Healthcare Providers
              </p>
            </div>
            <div className="mt-6 lg:mt-0">
              <button class="btn btn-green text-white">Add Document</button>
            </div>
          </div>
        </div>
        <div class="bg-penta">
        </div>

        <div className="table-div header mx-auto w-11/12 lg:w-10/12 py-10 px-10 user-div mt-4">
          <table class="w-full">
            <tr class="table-border user-item-container flex flex-wrap md:table-row">
              <th className="py-4 text-left">Name</th>
              <th className="py-4 text-left">City</th>
              <th className="py-4 text-left">Pin Code</th>
              <th className="py-4 text-left">Email ID</th>
              <th className="py-4 text-left">Mobile</th>
              <th className="py-4 text-left">DOB</th>
            </tr>
            <tbody class=" ">{this.renderUserItems()}</tbody>
          </table>

          <div class="mt-4 flex justify-end">
            <button
              onClick={this.prevUsers}
              className="navigation-btn px-4 py-4 mr-2"
            >
              <img alt="nav-img" src={previousIcon} className="nav-icon" />
            </button>
            <button
              onClick={this.nextUsers}
              className="navigation-btn px-4 py-4"
            >
              <img alt="nav-img" src={nextIcon} className="nav-icon" />
            </button>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}
