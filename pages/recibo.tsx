import React, { useState } from "react";
import jsPDF from "jspdf";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {
  Button,
  TextField,
  Avatar,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/recibo.module.scss";

export function Recibo() {
  const theme = createTheme();

  const [numeroRecibo, setNumeroRecibo] = useState("1");
  const [valor, setValor] = useState("300");
  const [pagador, setPagador] = useState("João");
  const [valorEscrito, setValorEscrito] = useState("Trezentos Reais");
  const [descricao, setDescricao] = useState("Conserto de televisão");
  const [cidade, setCidade] = useState("Diadema");
  const [data, setData] = useState("21 de Setembro de 2022");
  const [recebeNome, setRecebeNome] = useState("Davi");
  const [cpf, setCpf] = useState("111.111.111.111");

  let docDefinition = {
    content: [
      {
        // in browser is supported loading images via url from reference by name in images
        image: "recibo1",
        width: 500,
        height: 280,
      },
      {
        text: `${numeroRecibo}`,
        absolutePosition: { x: 290, y: 66 },
      },
      {
        text: `${valor}`,
        absolutePosition: { x: 450, y: 66 },
      },
      {
        text: pagador,
        absolutePosition: { x: 180, y: 105 },
      },
      {
        text: valorEscrito,
        absolutePosition: { x: 180, y: 133 },
      },
      {
        text: descricao,
        absolutePosition: { x: 180, y: 163 },
      },
      {
        text: cidade,
        absolutePosition: { x: 210, y: 210 },
      },
      {
        text: data,
        absolutePosition: { x: 340, y: 210 },
      },
      {
        text: recebeNome,
        absolutePosition: { x: 140, y: 262 },
      },
      {
        text: cpf,
        absolutePosition: { x: 375, y: 262 },
      },

      "\n\n\n____ ___ ____ ____ ___ ____ ___ ___ ____ ___ ___ ___ ___ ___ ____ ____ ___ ____ ____ ___ ___ ___ ____ __\n\n\n\n", //recibo 2 linha
      {
        image: "recibo2",
        width: 500,
        height: 280,
      },
      {
        text: numeroRecibo,
        absolutePosition: { x: 290, y: 444 },
      },
      {
        text: valor,
        absolutePosition: { x: 450, y: 444 },
      },
      {
        text: pagador,
        absolutePosition: { x: 180, y: 483 },
      },
      {
        text: valorEscrito,
        absolutePosition: { x: 180, y: 133 + 378 },
      },
      {
        text: descricao,
        absolutePosition: { x: 180, y: 163 + 378 },
      },
      {
        text: cidade,
        absolutePosition: { x: 210, y: 210 + 378 },
      },
      {
        text: data,
        absolutePosition: { x: 340, y: 210 + 378 },
      },
      {
        text: recebeNome,
        absolutePosition: { x: 140, y: 262 + 378 },
      },
      {
        text: cpf,
        absolutePosition: { x: 375, y: 262 + 378 },
      },
    ],

    images: {
      mySuperImage: "data:image/jpeg;base64,...content...",

      // in browser is supported loading images via url (https or http protocol) (minimal version: 0.1.67)
      recibo1:
        "https://raw.githubusercontent.com/davi38/gerador-recibo/main/assets/recibo.jpg",

      // is supported loading images via url with custom headers (minimal version: 0.2.5)
      recibo2: {
        url: "https://raw.githubusercontent.com/davi38/gerador-recibo/main/assets/recibo.jpg",
      },
    },
  };

  function printDocument() {
    const doc = new jsPDF();
    //html to pdf format
    //@ts-ignore
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    //@ts-ignore
    pdfMake.createPdf(docDefinition).open();
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end"></Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <div className="App body-recibo container mt-5">
        <button className="btn btn-primary block" onClick={printDocument}>
          Export To PDF
        </button>
        <div>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
      </div>
    </>
  );
}

export default Recibo;
