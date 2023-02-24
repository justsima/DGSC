import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DashboardLayout } from "../components/dashboard-layout";
// import { useRouter } from "next/router";
export default function AddInventory() {
  function handleClick() {
    console.log("Button clicked!");
  }
  const { register, handleSubmit, reset } = useForm();
  const newRequest = (data) => {
    console.log(data);
  };
  return (
    <>
      <DashboardLayout>
        {/* <div className="flex justify-between px-10">
        <Typography className="text-left mb-10 font-bold font-3 text-2xl uppercase text-[#7e3a07]">
          Add Inventory
        </Typography>
        <Link className="mb-5" href="/dashboard/ViewInventory">
          <button className="w-60 p-2 mt-10 text-white bg-[#FF7A11] rounded-lg">
            Back to View Inventory
          </button>
        </Link>
      </div> */}
        <div className="px-10">
          <Card>
            <Typography className="text-left p-5 font-3 text-lg uppercase text-[#3C2223] font-bold">
              This is a form to add Inventory{" "}
            </Typography>
            <form onSubmit={handleSubmit(newRequest)}>
              <Grid container spacing={4} className="p-5">
               
                <Grid item xs={12} sm={6}>
                  <InputLabel>Inventory Name</InputLabel>
                  <TextField
                    required
                    name="Name"
                    // label="Inventory Name"
                    type="text"
                    fullWidth
                    {...register("name")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel>Inventory Description</InputLabel>
                  <TextField
                    required
                    name="Description"
                    // label="Inventory Description"
                    type="text"
                    fullWidth
                    {...register("description")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel>Inventory Price</InputLabel>
                  <TextField
                    required
                    name="Price"
                    // label="Inventory Price"
                    type="text"
                    fullWidth
                    {...register("price ")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel>Inventory Stock</InputLabel>
                  <TextField
                    name="Stock"
                    // label="Inventory Stock"
                    type="text"
                    fullWidth
                    {...register("stock")}
                  />
                </Grid>
                <Grid item lg={6} sm={12}>
                  <InputLabel id="demo-simple-select-label">
                    Inventory Location
                  </InputLabel>
                  <Select
                    className="w-full"
                    label="Inventory Location"
                    id="demo-simple-select"
                    // value={age}
                    //   label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>List Of Locations</MenuItem>
                  </Select>
                </Grid>
                <Grid item lg={6} sm={12}>
                  <InputLabel>Inventory Image</InputLabel>
                  <TextField
                    required
                    name="Image"
                    // label="Inventory Image "
                    type="file"
                    fullWidth
                    {...register("image")}
                  />
                </Grid>
                <Grid item lg={6} sm={12}>
                  <InputLabel>Inventory Date</InputLabel>
                  <TextField
                    required
                    name="Date"
                    // label="Inventory Date "
                    type="date"
                    fullWidth
                    {...register("date")}
                  />
                </Grid>
                <Grid item lg={6} sm={12}>
                  </Grid>
                <Grid item>
                  <button className="w-60 p-2 mt-10 text-white bg-[#FF7A11] rounded-lg" onClick={handleClick}>Submit</button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </div>
      </DashboardLayout>
    </>
  );
}
