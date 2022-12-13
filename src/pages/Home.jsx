import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import Charts from "../components/tables/Charts";
import KpiCards from "../components/tables/KpiCards";
import useStockCalls from "../hooks/useStockCalls";

const Home = () => {
  const { getFirms, getSales } = useStockCalls();
  useEffect(() => {
    getFirms();
    getSales();
  }, []);
  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Dashboard
      </Typography>
      <KpiCards />
      <Charts />
    </Box>
  );
};

export default Home;
