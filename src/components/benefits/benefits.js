import React, { Component } from "react";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";

import "./benefits.scss";
import { BENEFITS } from "../../constants/const-paths/paths";

export default class Benefits extends Component {
  data = [{ id: 0, name: "reward" }, { id: 1, name: "birthday" }];

  render() {
    return (
      <div>
        <Link
          to={`${BENEFITS}/add`}
          style={{
            textDecoration: "none"
          }}
        >
          <button className="btn btn-success">Add benefit</button>
        </Link>
        <Link
          to={`${BENEFITS}/history`}
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          <button className="btn btn-outline-success">Benefits History</button>
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
