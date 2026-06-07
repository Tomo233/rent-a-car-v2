import { useState } from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import CustomMenuItem from "./CustomMenuItem";
import ProfileImage from "../../assets/avatar.jpg";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Person2Icon from "@mui/icons-material/Person2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CarRentalIcon from "@mui/icons-material/CarRental";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="hidden sm:block">
      <Box sx={{ display: "flex", alignItems: "center" }} onClick={handleClick}>
        <Avatar sx={{ width: 48, height: 48 }}>
          <img src={ProfileImage} alt="ProfileIMage" />
        </Avatar>
        <p className="ml-2 font-semibold text-white">Tomo</p>
        <Tooltip title="Account settings">
          <IconButton
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              backgroundColor: () => alpha("#284d88", 0.85),
              backdropFilter: "blur(12px)",
              color: "#f1f5f9",
              borderRadius: "12px",
              border: "1px solid",
              borderColor: () => alpha("#64748b", 0.4),
              boxShadow: "0px 10px 25px rgba(15, 23, 42, 0.4)",
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <CustomMenuItem onClick={handleClose}>
          <Person2Icon />
          Profile
        </CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>
          <CalendarMonthIcon />
          Calendar
        </CustomMenuItem>
        <Divider />
        <CustomMenuItem onClick={handleClose}>
          <CarRentalIcon />
          Add new car
        </CustomMenuItem>
        <Divider />

        <CustomMenuItem onClick={handleClose}>
          <ExitToAppIcon />
          Sign out
        </CustomMenuItem>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
