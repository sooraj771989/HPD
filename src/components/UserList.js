import React, { Component } from "react";
import UserItem from "./UserItem";
import { getRandomUsers } from "./User";
import loading from "../img/loading.gif";

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true };
  }





  componentWillMount() {
    getRandomUsers(10).then((data) => {
      this.setState({
        users: data,
        fetching: false,
      });
    });
  }

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
        <div className="flex flex-col">
          <img src={loading} className="loading-icon" />
          <p className="text-xl">Loading .... </p>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="px-4 flex py-4 bg-blue items-end">
          <div className="container mx-auto flex justify-between items-end">
            <div className="">
              <h2 class="text-white text-title">
                Healthcare Provider Documents
              </h2>
              <p className="text-subtitle">
                Documents shared by Healthcare Providers
              </p>
            </div>
            <div>
              <button class="btn btn-green text-white">Add Document</button>
            </div>
          </div>
        </div>

        <div className="header mx-auto w-11/12 lg:w-10/12 py-10 px-10 user-div">
          <table class="w-full ">
            <tr class="table-border flex lg:flex justify-between">
              <th className="py-4 text-left">Name</th>
              <th className="py-4 text-left">City</th>
              <th className="py-4 text-left">Pincode</th>
              <th className="py-4 text-left">Email ID</th>
              <th className="py-4 text-left">Mobile</th>
              <th className="py-4 text-left">DOB</th>
            </tr>
            <tbody class=" ">{this.renderUserItems()}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
