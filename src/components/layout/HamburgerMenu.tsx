import React, { useState, Fragment, ElementType } from "react";
import {
  Box,
  Drawer,
  MenuList,
  Divider,
  alpha,
  SvgIconProps,
} from "@mui/material";

import CustomMenuItem from "./CustomMenuItem";
import { NavHashLink } from "react-router-hash-link";
import { navLinks } from "./Navigation";

import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HelpIcon from "@mui/icons-material/Help";
import LoginIcon from "@mui/icons-material/Login";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined"; // FAQ (Q&A Bubbles)
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"; // About Us
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";

type MenuItem = {
  label: string;
  href: string;
  icon: ElementType<SvgIconProps>;
};

const navigation: MenuItem[] = navLinks.map((item) => {
  let icon: ElementType<SvgIconProps>;

  switch (item.label) {
    case "Help":
      icon = LiveHelpOutlinedIcon;
      break;
    case "About Us":
      icon = InfoOutlinedIcon;
      break;
    case "FAQ":
      icon = QuestionAnswerOutlinedIcon;
      break;
    default:
      icon = HelpIcon;
  }

  return { ...item, icon };
});

const menuItems = [
  ...navigation,
  {
    label: "Sign Out",
    href: "#",
    icon: ExitToAppIcon,
  },
  {
    label: "Login",
    href: "#",
    icon: LoginIcon,
  },
] as const;

const drawerBoxStyles = {
  backgroundColor: alpha("#1254cd", 0.85),
  backdropFilter: "blur(12px)",
  color: "#f1f5f9",
  border: "1px solid",
  borderColor: alpha("#64748b", 0.4),
  boxShadow: "0px 10px 25px rgba(15, 23, 42, 0.4)",
  overflow: "visible",
  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  "& .MuiAvatar-root": {
    width: 32,
    height: 32,
    ml: -0.5,
    mr: 1,
  },
};

type Anchor = "top";

export default function HamburgerMenu({ anchor = "top" }: { anchor?: Anchor }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    };

  return (
    <div className="block sm:hidden">
      <button onClick={toggleDrawer(true)} aria-label="open menu">
        <div className="mr-5">
          <MenuIcon sx={{ fontSize: "50px", color: "#1254cd" }} />
        </div>
      </button>

      <Drawer
        anchor={anchor}
        open={isOpen}
        onClose={toggleDrawer(false)}
        disableEnforceFocus
        disableRestoreFocus
      >
        <Box
          className="BOX"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={drawerBoxStyles}
        >
          <MenuList>
            {menuItems.map(({ label, icon: Icon, href }, index) => (
              <Fragment key={label || index}>
                <NavHashLink to={href} smooth>
                  <CustomMenuItem>
                    <Icon />
                    {label}
                  </CustomMenuItem>
                  <Divider />
                </NavHashLink>
              </Fragment>
            ))}
          </MenuList>
        </Box>
      </Drawer>
    </div>
  );
}
