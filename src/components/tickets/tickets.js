import React, { useContext, useEffect, useState } from "react";
import { Context } from "../app/context";
import { GET_TICKETS_SUCCEED } from "../app/reducers";
import { Link } from "react-router-dom";

import TicketsServices from "../../services/tickets-services";
import Table from "../../utils/table-core/table";
import "./tickets.scss";
import { TICKETS } from "../../constants/const-paths/paths";

const Tickets = () => {
  const [editIdx, setEditIdx] = useState(-1);
  const [searchValue, setSearchValue] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [sortBy, setSortBy] = useState("dateStart");

  const { dispatch, ticketsState } = useContext(Context);

  useEffect(() => {
    const ticketsService = new TicketsServices();
    ticketsService.getAllTickets().then(res => {
      dispatch({
        type: GET_TICKETS_SUCCEED,
        payload: res.data
      });
    });
  }, [activePage, dispatch, sortBy]);

  const handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const handleSortBy = sortBy => {
    setSortBy(sortBy);
  };

  const updateSearch = e => {
    setSearchValue(e.target.value.substr(0, 20));
  };

  const startEditing = i => {
    setEditIdx(i);
  };

  const stopEditing = () => {
    setEditIdx(-1);
  };
  return (
    <>
      <Link to={`${TICKETS}/add`} style={{ textDecoration: "none" }}>
        <button className="btn btn-success">Add Ticket</button>
      </Link>
      <Table
        data={ticketsState.tickets}
        header={[
          {
            name: "Start Date",
            prop: "dateStart",
            type: "text"
          },
          {
            name: "End Date",
            prop: "dateEnd",
            type: "text"
          },
          {
            name: "Info",
            prop: "_id",
            type: "text"
          }
        ]}
        redirectTo={`${TICKETS}`}
        // deleteItem={id => {
        //   this.props.removedUser(id);
        // }}
        // updateItem={obj => {
        //   this.props.editUser({ ...obj, multi: true });
        // }}
        editIdx={editIdx}
        startEditing={startEditing}
        stopEditing={stopEditing}
        search={e => updateSearch(e)}
        searchValue={searchValue}
        onPageChange={i => handlePageChange(i)}
        activePage={activePage}
        count={ticketsState.ticketsCount}
        onSortBy={i => handleSortBy(i)}
        sortBy={sortBy}
      />
    </>
  );
};

export default Tickets;
