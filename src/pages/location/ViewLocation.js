import React, { useState, useEffect } from "react";
import { DashboardLayout } from "../../components/dashboard-layout";
import Table from "../../components/Table";
import axios from "axios";
export default function ViewLocation() {
  const columns = [
    { title: "Location Name", field: "name" },
    { title: "Location Address ", field: "address" },
    {
      title: " Location Phone",
      field: "phone",
    },

    { title: "Location Description ", field: "description" },
    {
      title: "Location Longtiude",
      field: "longitude",
    },
    { title: "Location Latiude", field: "latitude" },
    { title: "Location Link", field: "link" },
  ];
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:4000/Location/getAll")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <DashboardLayout>
     
        <div>
          <Table
            title="All Location List"
            data={data}
            columns={columns}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setData([...data, newData]);
                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);

                    resolve();
                  }, 1000);
                }),
            }}
            options={{
              detailPanelType: "single",
              detailPanelColumnAlignment: "right",
              paging: true,
              pageSize: 10,
              search: true,
              toolbarButtonAlignment: "left",
              actionsColumnIndex: -1,
              addRowPosition: "last",
            }}
            detailPanelOptions={{
              placement: "bottom",
            }}
          ></Table>
        </div>
      </DashboardLayout>
    </>
  );
}
