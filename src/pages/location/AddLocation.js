import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useForm } from "react-hook-form";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../components/dashboard-layout";
export default function AddLocation() {
  function handleClick() {
    console.log("Button clicked!");
  }
  const { register, handleSubmit, reset } = useForm();

  const newLocation = (data) => {
    // console.log(data);
    const req = {
      name: data.name,
      address: data.address,
      phone: data.phone,
      description: data.description,
      longitude: Number(data.longtiude),
      latitude: Number(data.latitude),
      link: data.link,
    };
    axios
      .post("http://localhost:4000/Location/create", req)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <DashboardLayout>
        <div className="px-10">
          <Card>
            <Typography className="text-left p-5 font-3 text-lg uppercase text-[#3C2223] font-bold">
              This is a form to add more Location{" "}
            </Typography>
            <form onSubmit={handleSubmit(newLocation)}>
              <Grid container spacing={4} className="p-5">
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="name"
                    label="Location Name"
                    type="text"
                    fullWidth
                    {...register("name")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="address"
                    label="Location Address"
                    type="text"
                    fullWidth
                    {...register("address")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="phone"
                    label="Location Phone"
                    type="text"
                    fullWidth
                    {...register("phone")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="description"
                    label="Location Description"
                    type="text"
                    fullWidth
                    {...register("description")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="longtiude"
                    label="Location Long"
                    type="text"
                    fullWidth
                    {...register("longtiude")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="latitude"
                    label="Location Lat"
                    type="text"
                    fullWidth
                    {...register("latitude")}
                  />
                </Grid>
                <Grid item lg={6} sm={12}>
                  <TextField
                    required
                    name="link"
                    label="Location Link"
                    type="text"
                    fullWidth
                    {...register("link")}
                  />
                </Grid>
                <Grid item lg={6} sm={12}></Grid>
                <Grid item>
                  <button
                    className="w-60 p-2 mt-10 text-white bg-[#FF7A11] rounded-lg"
                    onClick={handleClick}
                  >
                    Submit
                  </button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </div>
      </DashboardLayout>
    </>
  );
}
