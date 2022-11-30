import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";

const Firms = () => {
  const { getFirms, getSales } = useStockCalls();
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
    getSales();
  }, []);

  return <div>Firms</div>;
};

export default Firms;
