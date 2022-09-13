import { useState, useEffect } from "react";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { saveAs } from "file-saver";
import { useRouter } from "next/router";

const axios = require("axios").default;

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

/* {numeroRecibo,
      valor,
      nome,
      descricao,
      cidade,
      nomeRecebedor,
      numeroCpfRg,} */

export default function SignUp() {
  const [dados, getDados] = useState({});

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    getDados({
      numeroRecibo: data.get("numeroRecibo"),
      valor: data.get("valor"),
      nome: data.get("nome"),
      descricao: data.get("descricao"),
      cidade: data.get("cidade"),
      nomeRecebedor: data.get("nomeRecebedor"),
      numeroCpfRg: data.get("numeroCpfRg"),
    });
    sendJson(JSON.stringify(dados));
  };

  const sendJson = async (dados: any) => {
    axios.post("http://localhost:3000/api/pdf").then(async (res: any) => {
      console.log(res.data);
      var blob = new Blob([res.data], {
        type: "application/pdf",
      });
      saveAs(blob, "teste.pdf");
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="numeroRecibo"
                  required
                  fullWidth
                  id="numeroRecibo"
                  label="Número Recibo"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="valor"
                  label="Valor"
                  name="valor"
                  autoComplete="nome"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  name="nome"
                  autoComplete="nome"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="descricao"
                  label="Descricao"
                  id="descricao"
                  autoComplete="descricao"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cidade"
                  label="Cidade"
                  id="cidade"
                  autoComplete="cidade"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="nomeRecebedor"
                  label="Nome Recebedor"
                  id="nomeRecebedor"
                  autoComplete="nomeRecebedor"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="numeroCpfRg"
                  label="Número Cpf - Rg"
                  id="numeroCpfRg"
                  autoComplete="numeroCpfRg"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
