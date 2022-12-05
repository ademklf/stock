import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnHoverStyle } from "../styles/globalStyle";
import useStockCalls from "../hooks/useStockCalls";
import { CardHeader } from "@mui/material";

export default function FirmCard({ firm, setOpen, setInfo }) {
  const { deleteFirm } = useStockCalls();
  return (
    <Card
      elevation={10}
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader title={firm?.name} subheader={firm?.address} />
      <CardMedia
        image={firm?.image}
        sx={{ p: 1, objectFit: "contain", height: "130px" }}
        component="img"
        alt="firm-img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <EditIcon
          sx={btnHoverStyle}
          onClick={() => {
            setOpen(true);
            setInfo(firm);
          }}
        />
        <DeleteOutlineIcon
          sx={btnHoverStyle}
          onClick={() => deleteFirm(firm?.id)}
        />
      </CardActions>
    </Card>
  );
}
