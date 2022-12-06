import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ButtonBase } from "@mui/material";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";

const Firms = () => {
  const { getBrands, getCategories, getProducts } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  useEffect(() => {
    getBrands();
    getCategories();
    getProducts();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Products
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Product
      </Button>

      {/* <ProductModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      /> */}

      {firms?.length > 0 && (
        <Grid container justifyContent="center" gap={3}>
          {firms?.map((firm) => (
            <Grid item>
              <FirmCard
                key={firm.id}
                firm={firm}
                setOpen={setOpen}
                setInfo={setInfo}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;
