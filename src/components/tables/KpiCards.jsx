import { Grid, Paper, Typography, Avatar, Box } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { indigo, pink, amber } from "@mui/material/colors";
import { useSelector } from "react-redux";

const KpiCards = () => {
  const data = [
    {
      title: "sales",
      metric: "$0",
      icon: <MonetizationOnIcon />,
      color: indigo[900],
      bgColor: indigo[300],
    },
    {
      title: "profit",
      metric: "$0",
      icon: <PaymentsIcon />,
      color: pink[900],
      bgColor: pink[300],
    },
    {
      title: "purchases",
      metric: "$0",
      icon: <ShoppingCartIcon />,
      color: amber[900],
      bgColor: amber[300],
    },
  ];
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      {data.map((item) => (
        <Grid item key={item.title} xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }} elevation={10}>
            //!elevation kabartma verir
            <Box>
              <Avatar>{item.icon}</Avatar>
              <Box>
                <Typography>{item.title}</Typography>
                <Typography>{item.metric}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;
