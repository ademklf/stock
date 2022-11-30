import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const Firms = () => {
  const { getFirms } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  // const { token } = useSelector((state) => state.auth);
  // const BASE_URL = "https://13832.fullstack.clarusway.com/";
  // const getFirms = async () => {
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/firms`, {
  //       headers: { Authorization: `Token ${token} ` },
  //     });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getFirms();
  }, []);

  return <div>Firms</div>;
};

export default Firms;
