import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));


export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props
  const navigate = useNavigate()
    return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
            // xs: '100%',
            // sm: '100%'
            // md: "100%",

          },
         
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 100,
            left: 2,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          {/* <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}
          <Box sx={{ flexGrow: 1 }} />
          {/* <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}
          <Tooltip title="Logout">
            <IconButton sx={{ ml: 1 }} onClick={() => {
                navigate('/')
            }}>
              {/* <Badge badgeContent={4} color="primary" variant="dot"> */}
                <LogoutIcon fontSize="small" />
              {/* </Badge> */}
            </IconButton>
          </Tooltip>
          {/* <Typography variant='h2' color='black'>{user.userName}</Typography> */}
          {/* <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1,
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar> */}
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
