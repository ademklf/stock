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

// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";

const Firms = () => {
  const { getFirms, getSales } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  // const dispatch = useDispatch();

  // const { getFirms } = useStockCalls();
  // const { firms } = useSelector((state) => state.stock);
  // const { token } = useSelector((state) => state.auth);
  // const BASE_URL = "https://13832.fullstack.clarusway.com/";
  // const getFirms = async () => {
  //   const url = "firms";
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token} ` },
  //     });
  //     console.log(data);
  //     dispatch(getSuccess({ data, url }));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Firms
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Firm
      </Button>

      <FirmModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

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
