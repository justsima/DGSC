import React from "react";
import { DashboardLayout } from "../../components/dashboard-layout";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const OrderView = () => {
  const navigate = useNavigate();
  const columns = [
    { title: "User Name", field: "userOrder.userName" },
    // { title: "User Order ", field: "surname" },
    // {
    //   title: " Membership Name",
    //   field: "mn",
    //   // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    // },

    { title: "Location", field: "location.name" },
    {
      title: "Status",
      field: "status",
    },
    { title: "Total Price", field: "totalPrice", type: "numeric" },
  ];
  const [data, setData] = useState();
  const [orderList, setOrderList] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/Order/getAll")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setOrderList(res.data.orderItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const completeOrder = (rowData) => {
    history.go(0);
    console.log(rowData);
    axios
      .get(`http://localhost:4000/Order/complete/${rowData.id}`)
      .then((res) => {
        navigate(`/Order`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <DashboardLayout>
        <div className=" w-full">
          <Table
            title="All Order List"
            data={data}
            columns={columns}
            detailPanel={(rowData) => {
              console.log(rowData.orderItems);
              return (
                <>
                  <div>
                    <Table
                      title="Ordered Item Details"
                      columns={[
                        { title: "Name", field: "inventory.name" },
                        {
                          title: "Description",
                          field: "inventory.description",
                        },
                        {
                          title: "Quantity",
                          field: "quantity",
                          type: "numeric",
                        },
                        {
                          title: "Price",
                          field: "inventory.price",
                        },
                        {
                          title: "In Stock",
                          field: "inventory.stock",
                        },
                      ]}
                      data={rowData.orderItems}
                      options={{
                        selection: true,
                      }}
                      actions={[
                        {
                          tooltip: "Selected Items",
                          icon: "delete",
                          onClick: (evt, data) =>
                            alert(
                              "You want to delete " + data.length + " rows"
                            ),
                        },
                      ]}
                      editable={{
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
                    />
                  </div>

                  {/* <Link
                  className="px-10 gap-10 flex justify-end"
                  to="/dashboard/OrderDetail"
                > */}
                  <div className="px-2 flex gap-2 justify-end">
                    <button className=" mb-5 w-60 p-2 mt-10 text-white bg-[#3C2223] rounded-lg">
                      Cancel
                    </button>
                    <button
                      onClick={(e) => completeOrder(rowData)}
                      className=" mb-5 w-60 p-2 mt-10 text-white bg-[#FF7A11] rounded-lg"
                    >
                      Complete Order
                    </button>
                  </div>
                  {/* </Link> */}
                </>
              );
            }}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setData([...data, newData]);
                    resolve();
                  }, 1000);
                }),
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
          ></Table>
        </div>
      </DashboardLayout>
    </>
  );
};

export default OrderView;
