import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DashboardLayout } from "../../components/dashboard-layout";
import logo from "../../assets/images/logowh.svg";
import axios from "axios";
import FileUpload from "react-mui-fileuploader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddInventory() {
  const { register, handleSubmit, reset } = useForm();
  const [filesToUpload, setFilesToUpload] = useState([]);
  const [locations, setLocations] = useState();
  const [selectLocation, setSelectLocation] = useState();
  const url = process.env.REACT_APP_URL;

  useEffect(() => {
    axios.get(url + "/Location/getAll").then(function (response) {
      console.log(response.data);
      setLocations(response.data);
    });
  }, []);

  function handleClick() {
    console.log("Button clicked!");
  }
  const handleFilesChange = (files) => {
    setFilesToUpload([...files]);
  };
  const handleFileUploadError = () => {
    alert("Error");
  };
  const newRequest = (data) => {
    console.log(data);
  };

  const newInventory = async (data) => {
    let formData = new FormData();
    filesToUpload.forEach((file) => formData.append("image", file));
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("locationId", data.locationId);

    await fetch(url + "/Inventory/create", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status == true) {
          window.location.reload();
          toast.success("Inventory Added", {
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
            <Typography
              variant="h4"
              className="text-left p-5 font-3 text-2xl  uppercase text-[#FF7A11] font-bold"
            >
              Add Inventory
            </Typography>
            <form onSubmit={handleSubmit(newInventory)}>
              <Grid container spacing={3} className="p-5">
                <Grid item xs={12} sm={6}>
                  <FileUpload
                    getBase64={false}
                    multiFile={false}
                    disabled={false}
                    title="Inventory Image"
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
                    {...register("price")}
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
                    value={selectLocation}
                    // label={"Age"}
                    // onChange={handleChange}
                    {...register("locationId")}
                  >
                    {locations &&
                      locations.map((items) => (
                        <MenuItem key={items.id} value={items.id}>
                          {items.name}
                        </MenuItem>
                      ))}
                  </Select>
                </Grid>
                <Grid item sm={12}>
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
        <ToastContainer />
      </DashboardLayout>
    </>
  );
}
