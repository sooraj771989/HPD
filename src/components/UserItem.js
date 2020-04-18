import React, { Component } from "react";
import PropTypes from "prop-types";

export default class UserItem extends Component {
  render() {
    const firstName = this.props.firstName;
    const city = this.props.city;
    const pincode = this.props.pincode;
    const emailid = this.props.emailid;
    const mobile = this.props.mobile;
    const dob = this.props.dob;

    // const dobcs = moment(dob).format("DD MMM YYYY")

    // moment().format("MMM Do YY");

    return (
      <React.Fragment>
        <tr className="flex lg:flex justify-between user-item-container">
          <td className="py-4"> {firstName}</td>
          <td className="py-4">{city}</td>
          <td className="py-4">{pincode}</td>
          <td className="py-4">{emailid}</td>
          <td className="py-4">{mobile}</td>
          <td className="py-4">{dob}</td>
        </tr>
      </React.Fragment>
    );
  }
}
