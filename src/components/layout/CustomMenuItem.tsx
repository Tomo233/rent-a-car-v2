import { ReactNode } from "react";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import { alpha } from "@mui/material";

type CustomMenuItemProps = MenuItemProps & {
  children: ReactNode;
};

function CustomMenuItem({ children, ...props }: CustomMenuItemProps) {
  return (
    <MenuItem
      {...props}
      sx={{
        py: 1,
        px: 2,
        display: "flex",
        alignItems: "center",
        gap: "5px",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: () => alpha("#ffffff", 0.08),
          color: "#fff",
        },
      }}
    >
      {children}
    </MenuItem>
  );
}

export default CustomMenuItem;
