import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { geoGraphData } from "../../utils/parseGeoData";
import { useEffect, useState } from "react";
import axios from "axios";
import blackcofferData from "../../data/blackcofferData";


const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    try {
      const parsedData = geoGraphData(blackcofferData);
      setFilteredData(parsedData);
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart data={filteredData} />
      </Box>
    </Box>
  );
};

export default Geography;
