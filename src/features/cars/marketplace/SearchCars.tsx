import { FormControl, MenuItem, Select } from "@mui/material";
import Container from "../../../components/ui/Container";
import SearchInput from "./SearchInput";
import SearchLabel from "./SearchLabel";

const selectStyles = {
  color: "white",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  "& .MuiSelect-select, & .MuiSvgIcon-root": { color: "white" },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#3b82f6" },

  "@media (max-width: 639px)": {
    height: "30px",
  },
};

const menuDropdownProps = {
  slotProps: {
    paper: {
      sx: {
        bgcolor: "rgba(15, 23, 42, 0.9)",
        color: "white",
        mt: "15px",
      },
    },
  },
};

const Cities = ["Belgrade", "Mostar", "Sarajevo", "Zagreb"];

function SearchCars() {
  return (
    <form className="absolute left-1/2 w-10/12 -translate-x-1/2 sm:-bottom-12 sm:w-full lg:-bottom-5">
      <Container>
        <div className="grid h-full w-full grid-cols-1 gap-1 rounded-xl border border-white/10 bg-slate-900/40 p-4 shadow-lg backdrop-blur-md sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          <div className="col-span-full grid grid-cols-1 items-start gap-1.5 lg:col-span-1">
            <SearchLabel>Location</SearchLabel>

            <FormControl size="small">
              <Select
                id="location"
                className="w-full"
                sx={selectStyles}
                MenuProps={menuDropdownProps}
              >
                {Cities.map((city) => (
                  <MenuItem value={city} key={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="grid grid-cols-1 items-start gap-1.5">
            <SearchLabel>Start Date</SearchLabel>
            <SearchInput type="date" />
          </div>

          <div className="grid grid-cols-1 items-start gap-1.5">
            <SearchLabel>Start Time</SearchLabel>
            <SearchInput type="time" />
          </div>

          <div className="grid grid-cols-1 items-start gap-1.5">
            <SearchLabel>End Time</SearchLabel>
            <SearchInput type="time" />
          </div>

          <div className="grid grid-cols-1 items-start gap-1.5">
            <SearchLabel>End Date</SearchLabel>
            <SearchInput type="date" />
          </div>

          <button
            type="submit"
            className="bg-button-color col-span-full h-10 cursor-pointer rounded-lg px-6 font-medium text-white shadow-md lg:col-span-1"
          >
            Search
          </button>
        </div>
      </Container>
    </form>
  );
}

export default SearchCars;
