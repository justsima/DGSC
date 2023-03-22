import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useForm } from "react-hook-form";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../components/dashboard-layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileUpload from "react-mui-fileuploader";
import logo from "../../assets/images/logowh.svg";

export default function AddLocation() {
  // const url = process.env.REACT_APP_URL;
  const url = "http://localhost:4000";
  const { register, handleSubmit, reset } = useForm();
  const [filesToUpload, setFilesToUpload] = useState([]);

  const handleFilesChange = (files) => {
    setFilesToUpload([...files]);
  };
  const handleFileUploadError = () => {
    alert("Error");
  };
  const handleClick = () => {
    console.log("clicked");
  };
  const newLocation = async (data) => {
    let formData = new FormData();
    filesToUpload.forEach((file) => formData.append("image", file));
    formData.append("name", data.name);
    formData.append("shopNumber", data.shopNumber);
    formData.append("locationName", data.locationName);
    formData.append("address", data.address);
    formData.append("phone", data.phone);
    formData.append("description", data.description);
    // formData.append("longitude", data.longtiude);
    // formData.append("latitude", data.latitude);
    formData.append("link", data.link);
    const res = await fetch(url + "/Location/create", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status == true) {
          window.location.reload();
          toast.success("Location Created", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        } else if (res.status == false) {
          toast.error("Error", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        }
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
              <Grid container spacing={3} className="p-5">
                <Grid item xs={12} sm={6}>
                  <FileUpload
                    getBase64={false}
                    multiFile={false}
                    disabled={false}
                    title="Location Image"
                    header="[Drag to drop]"
                    leftLabel="or"
                    rightLabel=""
                    buttonLabel="click here"
                    buttonRemoveLabel="Remove all"
                    maxFileSize={10}
                    maxUploadFiles={1}
                    maxFilesContainerHeight={357}
                    acceptedType={"image/*"}
                    errorSizeMessage={
                      "fill it or remove it to use the default error message"
                    }
                    allowedExtensions={[
                      "jpg",
                      "jpeg",
                      "png",
                      "webp",
                      "gif",
                      "svg",
                    ]}
                    onFilesChange={handleFilesChange}
                    onError={handleFileUploadError}
                    imageSrc={logo}
                    BannerProps={{ elevation: 0, variant: "outlined" }}
                    showPlaceholderImage={true}
                    PlaceholderGridProps={{ md: 4, lg: 2 }}
                    LabelsGridProps={{ md: 8 }}
                    onContextReady={(context) => {
                      // access to component context here
                    }}
                    ContainerProps={{
                      elevation: 0,
                      variant: "outlined",
                      sx: { p: 1 },
                    }}
                    PlaceholderImageDimension={{
                      xs: { width: 128, height: 128 },
                      sm: { width: 128, height: 128 },
                      md: { width: 164, height: 164 },
                      lg: { width: 200, height: 200 },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={4} className="p-5">
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="name"
                    label="Shop Name"
                    type="text"
                    fullWidth
                    {...register("name")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="shopNumber"
                    label="Shop Number"
                    type="number"
                    fullWidth
                    {...register("shopNumber")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="locationName"
                    label="Location Name"
                    type="text"
                    fullWidth
                    {...register("locationName")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="address"
                    label="Address"
                    type="text"
                    fullWidth
                    {...register("address")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="phone"
                    label="Phone Number"
                    type="text"
                    fullWidth
                    {...register("phone")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth
                    {...register("description")}
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
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
                </Grid> */}
                <Grid item lg={6} sm={12}>
                  <TextField
                    required
                    name="link"
                    label="Link"
                    type="text"
                    fullWidth
                    {...register("link")}
                  />
                </Grid>
                <Grid item lg={6} sm={12}></Grid>
                <Grid item>
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="w-60 p-2 mt-10 text-white bg-[#FF7A11] rounded-lg">
                    Submit
                  </button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </div>
        <ToastContainer />
      </DashboardLayout>
    </>
  );
}
