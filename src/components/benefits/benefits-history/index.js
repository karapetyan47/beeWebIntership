import React from "react";
import { Link } from "react-router-dom";

import Table from "../../../utils/table-core/table";
import { BENEFITS } from "../../../constants/const-paths/paths";

const BenefitsHistory = ({ url }) => {
  const data = [
    { id: 0, from: "Aro", to: "Gago" },
    { id: 1, from: "Mko", to: "Hovo" },
    { id: 2, from: "Hakob", to: "Gexam" }
  ];

  return (
    <div>
      <Link
        to={BENEFITS}
        style={{ textDecoration: "none", display: "inline-block" }}
      >
        <button className="btn btn-outline-success">
          <i className="fas fa-sliders-h"></i>
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
