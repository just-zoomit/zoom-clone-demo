import React, { useState } from "react";

import DataTable from "react-data-table-component";

import { useResource } from "../hooks/useResource";

import { TableContainer } from "./TableComponents";

import moment from "moment";
import { element } from "./dateTime";

const customStyles = {
  rows: {
    style: {
      minHeight: "35px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "30px",
    },
  },
};

export default function Table() {
  const [formData, setFormData] = useState({});

  const listmeetings = useResource("api/zoom/listmeetings");
  console.log("listmeetings", listmeetings.resources);
  const newData = listmeetings?.resources?.meetings?.map((item) => ({
    keyField: item.id,
    topic: item.topic,
  }));

  const columns = [
    {
      selector: (row) => (
        <div onClick={(e) => e.stopPropagation()}>{row.topic}</div>
      ),
    },
    {
      selector: (row) => (
        <div onClick={(e) => e.stopPropagation()}>{row.keyField}</div>
      ),
    },
    {
      selector: (row) =>
        row.keyField ? (
          <div>
            <button value={row.keyField} onClick={() => row.keyField}>
              <i class="material-icons large icon-blue md34px"> edit </i>
            </button>
          </div>
        ) : (
          <p>Loading</p>
        ),
    },
  ];

  // Meeting Data
  formData.start_time = moment(formData.start_time).format("YYYY-MM-DD HH:mm");

  return (
    <div style={{ maxWidth: "100vw", overflowX: "scroll" }}>
      <TableContainer>
        <div style={{ margin: "10px" }}>
          <DataTable
            title={element}
            columns={columns}
            data={newData}
            // progressPending={loading}
            customStyles={customStyles}
            pagination
          />
        </div>
      </TableContainer>
    </div>
  );
}
