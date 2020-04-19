import React, { Component } from "react";
import Moment from "moment";

export default class UserItem extends Component {
  render() {
    const firstName = this.props.firstName;
    const city = this.props.city;
    const pincode = this.props.pincode;
    const emailid = this.props.emailid;
    const mobile = this.props.mobile;
    const dob = this.props.dob;
    const formattedDT = Moment(dob).format("DD MMM YYYY"); //20 Mart 2017

    return (
      <React.Fragment>
        <tr className="user-item-container user-item-container flex flex-wrap md:table-row">
          <td className="py-4"> {firstName}</td>
          <td className="py-4">{city}</td>
          <td className="py-4">{pincode}</td>
          <td className="py-4">{emailid}</td>
          <td className="py-4">{mobile}</td>
          <td className="py-4">{formattedDT}</td>
        </tr>
      </React.Fragment>
    );
  }
}
