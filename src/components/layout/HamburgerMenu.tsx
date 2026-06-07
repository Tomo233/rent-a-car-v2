import { useState, Fragment } from "react";
import { MenuList } from "@mui/material";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Person2Icon from "@mui/icons-material/Person2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CarRentalIcon from "@mui/icons-material/CarRental";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import HelpIcon from "@mui/icons-material/Help";
import LoginIcon from "@mui/icons-material/Login";
import CustomMenuItem from "./CustomMenuItem";

type Anchor = "top";
const anchor = "top";

const MenuItemsList = [
  {
    icon: <DirectionsCarIcon />,
    text: "Cars List",
  },
  {
    icon: <Person2Icon />,
    text: "About Us",
  },
  {
    icon: <HelpIcon />,
    text: "Help",
  },
  {
    icon: <Person2Icon />,
    text: "Profile",
  },
  {
    icon: <CalendarMonthIcon />,
    text: "Calendar",
  },
  {
    icon: <CarRentalIcon />,
    text: "Add new car",
  },
  {
    icon: <ExitToAppIcon />,
    text: "Sign Out",
  },
  {
    icon: <LoginIcon />,
    text: "Login",
  },
];

function HamburgerMenu() {
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      className="BOX"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{
        backgroundColor: () => alpha("#284d88", 0.85),
        backdropFilter: "blur(12px)",
        color: "#f1f5f9",
        border: "1px solid",
        borderColor: () => alpha("#64748b", 0.4),
        boxShadow: "0px 10px 25px rgba(15, 23, 42, 0.4)",
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
      }}
    >
      <MenuList>
        {MenuItemsList.map(({ text, icon }) => (
          <Fragment key={Math.random()}>
            <CustomMenuItem>
              {icon}
              {text}
            </CustomMenuItem>
            <Divider />
          </Fragment>
        ))}
      </MenuList>
    </Box>
  );

  return (
    <div key={anchor} className="block sm:hidden">
      <button onClick={toggleDrawer(anchor, true)}>
        <div className="mr-5">
          <MenuIcon sx={{ fontSize: "50px", color: "#284d88" }} />
        </div>
      </button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        disableEnforceFocus
        disableRestoreFocus
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}

export default HamburgerMenu;
