import React, { Component } from "react";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";

import "./benefits.scss";

export default class Benefits extends Component {
  data = [{ id: 0, name: "premya" }, { id: 1, name: "birthday" }];

  render() {
    return (
      <div>
        <Link
          to={`${this.props.url}/history`}
          style={{
            textDecoration: "none"
          }}
        >
          <button className="btn">
            Benefits History <i className="fas fa-arrow-right"></i>
          </button>
        </Link>

        <Table
          data={this.data}
          header={[
            {
              name: "Name",
              prop: "name"
            }
          ]}
          message="Benefit"
        />
      </div>
    );
  }
}
