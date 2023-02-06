import React from "react";

import DataTable from "react-data-table-component";

import { useResource } from "../../../hooks/useResource";

import { TableContainer } from "./TableComponents";

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


// Adopted controlled component pattern
export default function Table({shouldFetch, onRequestClearData}) {
  
  const listmeetings = useResource("api/zoom/listmeetings");
  const newData = listmeetings?.resources?.meetings?.map((item) => ({
    keyField: item.id,
    topic: item.topic,
  }));

  const handleDelete = (e) => {
    console.log("handleDelete", e);
    alert(`Are you sure you want to delete meeting ${e} ?`);
  };


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
            <button value={row.keyField} onClick={() => handleDelete(row.keyField)}>
              <i class="material-icons large icon-blue"> delete_forever </i>
            </button>
          </div>
        ) : (
          <p>Loading</p>
        ),
    },
  ];


  return (
    <div style={{ maxWidth: "100vw", overflowX: "scroll" }}>
      <TableContainer>
        <div style={{ margin: "10px" }}>
          <DataTable
            title={element}
            columns={columns}
            data={shouldFetch ? newData : []}
            // progressPending={loading}
            customStyles={customStyles}
            pagination
          />
        </div>
      </TableContainer>
    </div>
  );
}
