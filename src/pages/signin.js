import React, { useState } from "react";
import { Grid, Card } from "@mui/material";
import LogoFull from "../assets/images/logofull.svg";
import Tomoca from "../assets/images/Tomoca.PNG";
import TomocaHQ from "../assets/images/HQtomoca.PNG";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SignInSide() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  //   const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    // axios
    //   .post("/login", {
    //     username: username,
    //     password: password,
    //   })
    //   .then(function (response: any) {
    //     if (response.data.status === 200) {
    //       enqueueSnackbar("Login Success", { variant: "success" });
    //        navigate("/index");
    //     }
    //   })
    //   .catch(function (error: Error) {
    //     enqueueSnackbar("Login Failed", { variant: "error" });
    //   });
    // navigate("/index");
    // enqueueSnackbar("Login Success", { variant: "success" });
  };
  return (
    <>
      <div className="h-[100vh] w-full grid place-items-center relative  bg-no-repeat bg-cover bg-center   ">
        {/* <img src={TomocaHQ} alt="" /> */}
        <div className=" w-full h-full bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl drop-shadow-lg grid place-items-center  ">
          <Card className="xl:w-[80rem] md:w-[45rem]  lg:w-[55rem]  md:mt-[-10rem] lg:mt-[-30rem] pr-10 xl:mt-10 rounded-5xl">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <img
                  className="xl:w-full w-[20rem] grid place-items-center "
                  src={Tomoca}
                  alt="Tomoca Images"
                />
              </Grid>
              <Grid className="grid place-items-center xl:h-[60vh] md:h-[50vh] lg:h-[40vh] " item xs={6}>
                <img className="w-20 mt-5 " src={LogoFull}></img>
                <h2 className="text-2xl text-[#FF7A11] font-bold mt-10  ">
                  ADMIN LOGIN
                </h2>
                <p className="xl:w-[25rem] text-[#C2C2C1] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                </p>
                <form>
                  <input
                    className="my-5 appearance-none border-b border-x-0 border-t-0 border-black w-full text-black mr-10 py-3 px-2 leading-tight outline-none"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                    name="UserName"
                  />
                  <input
                    className="my-5 appearance-none border-b border-x-0 border-t-0 border-black w-full text-black mr-10 py-3 px-2 leading-tight outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    name="Password"
                  />{" "}
                  <Link href="/dashboard">
                    <button
                      onClick={(e) => handleLogin(e)}
                      className="w-full p-2 mt-10 text-white bg-[#FF7A11]"
                    >
                      Login
                    </button>{" "}
                  </Link>
                </form>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    </>
  );
}
