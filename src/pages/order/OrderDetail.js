import React from "react";
import { DashboardLayout } from "../../components/dashboard-layout";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function OrderDetails() {
  return (
    <>
      <DashboardLayout>
        <div className="px-20 w-full overflow-hidden">
          <Card className="px-5">
            <Typography
              variant="h5"
              className="px-2 text-left mb-10 font-bold font-3 text-[2rem] uppercase text-[#FF7A11]"
            >
              View Order Detail{" "}
            </Typography>
            <CardContent className="p-4">
              <Typography variant="h6" sx={{mt:2, color: '#ff7a11', fontSize: '1.5rem'}}>User Name : <span className="text-xl text-[#893f30]">Petros</span></Typography>
              <Typography variant="h6" sx={{mt:2}}>Membership Type : <span className="text-xl text-[#893f30]">Gold</span></Typography>

              <div className="flex flex-col md:flex-row justify-between mt-10">
                <div className="mb-4 md:mb-0 ">
                  <Typography
                    variant="h6"
                    className="text-gray-700 font-medium"
                  >
                    Order Item Name
                  </Typography>
                  <Typography variant="subtitle1" className="text-gray-500">
                    2023-02-21
                  </Typography>
                </div>
                <div className="mb-4 md:mb-0">
                  <Typography
                    variant="h6"
                    className="text-gray-700 font-medium"
                  >
                    Order Item Quantity
                  </Typography>
                  <Typography variant="subtitle1" className="text-gray-500">
                    10
                  </Typography>
                </div>
                <div className="mb-4 md:mb-0">
                  <Typography
                    variant="h6"
                    className="text-gray-700 font-medium"
                  >
                    Order Item Price
                  </Typography>
                  <Typography variant="subtitle1" className="text-gray-500">
                    150
                  </Typography>
                </div>
              </div>

              <div className="mt-10">
                <Typography variant="h6" sx={{mt:2}}>Order Location : <span className="text-xl text-[#893f30]">Legehar</span></Typography>
                <Typography variant="h6" sx={{mt:2}}>Discount from Membership : <span className="text-xl text-[#893f30]">100%</span></Typography>
                <Typography variant="h6" sx={{mt:2}}>Membership Status : <span className="text-xl text-[#893f30]">Active</span></Typography>
                <Typography variant="h6" sx={{mt:2}}>Order Date : <span className="text-xl text-[#893f30]">10-10-2023</span></Typography>
                <Typography variant="h6" sx={{mt:2}}>Total Price : <span className="text-xl text-[#893f30]">145</span></Typography>
              </div>
              <div className="px-3 flex gap-2 justify-end">
                <button className=" mb-5 w-60 p-2 mt-10 text-white bg-[#3C2223] rounded-lg">
                  Cancel
                </button>
                <button className=" mb-5 w-60 p-2 mt-10 text-white bg-[#FF7A11] rounded-lg">
                  Complete Order
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </>
  );
}
