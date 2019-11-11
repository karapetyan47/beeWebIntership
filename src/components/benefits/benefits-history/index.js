import React from "react";
import { Link } from "react-router-dom";

import Table from "../../../utils/table-core/table";

const BenefitsHistory = ({ url }) => {
  const data = [
    { id: 0, from: "Aro", to: "Gago" },
    { id: 1, from: "Mko", to: "Hovo" },
    { id: 2, from: "Hakob", to: "Gexam" }
  ];

  return (
    <div>
      <Link
        to={`${url}`}
        style={{ textDecoration: "none", display: "inline-block" }}
      >
        <button className="btn">
          Benefits <i className="fas fa-arrow-left"></i>
        </button>
      </Link>
      <Table
        data={data}
        header={[
          {
            name: "From",
            prop: "from"
          },
          {
            name: "To",
            prop: "to"
          }
        ]}
        message="Benefit Hostory"
      />
    </div>
  );
};

export default BenefitsHistory;
