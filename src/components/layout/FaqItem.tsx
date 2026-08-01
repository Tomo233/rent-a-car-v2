import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { questionsAndAnswers } from "./FaqSection";

type FaqData = (typeof questionsAndAnswers)[number];

type FaqItemProps = {
  row: FaqData;
};

function FaqItem({ row }: FaqItemProps) {
  const [open, setOpen] = React.useState(false);

  const handleRowClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={handleRowClick}
        style={{ cursor: "pointer" }}
      >
        <TableCell>
          <IconButton size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <p
            className={`text-xl font-medium tracking-wider ${open && "text-primary-color"}`}
          >
            {row.question}
          </p>
        </TableCell>
      </TableRow>
      <TableRow style={{ display: open ? "table-row" : "none" }}>
        <TableCell style={{ padding: 0, margin: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table
                size="small"
                aria-label="answers"
                style={{ borderCollapse: "collapse" }}
              >
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row.answer}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default FaqItem;
