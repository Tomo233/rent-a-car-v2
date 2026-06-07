import { ReactNode } from "react";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import { alpha } from "@mui/material";

type AccountMenuItemProps = MenuItemProps & {
  children: ReactNode;
};

function AccountMenuItem({ children, ...props }: AccountMenuItemProps) {
  return (
    <MenuItem
      {...props}
      sx={{
        py: 1,
        px: 2,
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

export default AccountMenuItem;
