import * as React from "react";
import Table from "../../components/Table";
import { DashboardLayout } from "../../components/dashboard-layout";
import axios from "axios";
export default function paymentList() {
  const columns = [
    { title: "Order", field: "name" },
  
    {
      title: "Payment Total",
      field: "price",
    },

    { title: "Pending Payments", field: "description" },
    {
      title: "Status",
      field: "status",
    },
   
  ];
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:4000/Payment/getAll")
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
        <div className="w-full">
          <Table
            title="Payment List"
            data={data}
            columns={columns}
            // editable={{
            //   onRowAdd: (newData) =>
            //     new Promise((resolve, reject) => {
            //       setTimeout(() => {
            //         setData([...data, newData]);
            //         resolve();
            //       }, 1000);
            //     }),
            //   onRowUpdate: (newData, oldData) =>
            //     new Promise((resolve, reject) => {
            //       setTimeout(() => {
            //         const dataUpdate = [...data];
            //         const index = oldData.tableData.id;
            //         dataUpdate[index] = newData;
            //         setData([...dataUpdate]);

            //         resolve();
            //       }, 1000);
            //     }),
            //   onRowDelete: (oldData) =>
            //     new Promise((resolve, reject) => {
            //       setTimeout(() => {
            //         const dataDelete = [...data];
            //         const index = oldData.tableData.id;
            //         dataDelete.splice(index, 1);
            //         setData([...dataDelete]);

            //         resolve();
            //       }, 1000);
            //     }),
            // }}
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
