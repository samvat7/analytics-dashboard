import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { useEffect, useState } from "react";
import { parseInsightsData } from "../../utils/parseInsightsData";
import blackcofferData from "../../data/blackcofferData";

const Bar = () => {
  const [filteredBarGraphData, setFilteredBarGraphData] = useState([]);

  useEffect(() => {
    const parsedData = parseInsightsData(blackcofferData);
    const barGraphData = parsedData.barGraphData;

    setFilteredBarGraphData(
      barGraphData.filter(
        (item) =>
          item.country === "United States of America" ||
          item.country === "Russia" ||
          item.country === "Iran" ||
          item.country === "Saudi Arabia" ||
          item.country === "India"
      )
    );
  }, []);

  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart propData={filteredBarGraphData} />
      </Box>
    </Box>
  );
};

export default Bar;
