import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { useEffect, useState } from "react";
import axios from "axios";
import { parseInsightsData } from "../../utils/parseInsightsData";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import blackcofferData from "../../data/blackcofferData";

const Line = () => {
  var parsedData = [];

  const [filteredData, setFilteredData] = useState([]);

  const parsedCountryList = ["america", "china", "india", "russia", "japan"];

  const [country, setCountry] = React.useState("india");

  //using axios to get data from the server, then parsing it, then filtering it to get the data for the current country

  useEffect(() => {
    try {
      const parsedData = parseInsightsData(blackcofferData);
      setFilteredData(parsedData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Country"
          onChange={handleChange}
        >
          {parsedCountryList.map((country, index) => (
            <MenuItem key={index} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box height="75vh">
        <LineChart isDashboard={false} data={filteredData} country={country} />
      </Box>
    </Box>
  );
};

export default Line;
