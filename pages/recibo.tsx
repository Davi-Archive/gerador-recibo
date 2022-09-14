import React, { useState } from "react";
import jsPDF from "jspdf";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {
  Button,
  TextField,
  Avatar,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import recibo from "../assets/recibo.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/recibo.module.scss";

export function Recibo() {
  const theme = createTheme();

  const [numeroRecibo, setNumeroRecibo] = useState("");
  const [valor, setValor] = useState("");
  const [pagador, setPagador] = useState("");
  const [valorEscrito, setValorEscrito] = useState("");
  const [descricao, setDescricao] = useState("");
  const [cidade, setCidade] = useState("");
  const [data, setData] = useState("");
  const [recebeNome, setRecebeNome] = useState("");
  const [cpf, setCpf] = useState("");

  function printDocument() {
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

    const doc = new jsPDF();
    //html to pdf format
    //@ts-ignore
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    //@ts-ignore
    pdfMake.createPdf(docDefinition).open();
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      numeroRecibo: data.get("numeroRecibo"),
      valor: data.get("valor"),
      pagador: data.get("pagador"),
      valorEscrito: data.get("valorEscrito"),
      descricao: data.get("descricao"),
      data: data.get("data"),
      cidade: data.get("cidade"),
      recebeNome: data.get("recebeNome"),
      cpf: data.get("cpf"),
    });

      printDocument();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundImage:
                'url("https://raw.githubusercontent.com/davi38/gerador-recibo/main/assets/recibo.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              color: "#020405",
              width: "1110px",
              height: "522px",
              marginLeft: "0px",
              position: "relative",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="numeroRecibo"
                    name="numeroRecibo"
                    required
                    id="numeroRecibo"
                    label="Numero do Recibo"
                    value={numeroRecibo}
                    onChange={(e) => setNumeroRecibo(e.target.value)}
                    autoFocus
                    variant="filled"
                    sx={{
                      position: "absolute",
                      top: "25px",
                      left: "500px",
                      width: "180px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                    fullWidth
                    autoFocus
                    id="valor"
                    label="Valor"
                    variant="filled"
                    autoComplete="valor"
                    sx={{
                      position: "absolute",
                      top: "25px",
                      left: "900px",
                      width: "150px",
                      height: "10px",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Recebe de"
                    name="pagador"
                    value={pagador}
                    onChange={(e) => setPagador(e.target.value)}
                    variant="filled"
                    size="small"
                    autoComplete="pagador"
                    sx={{
                      position: "absolute",
                      top: "103px",
                      left: "270px",
                      width: "780px",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={valorEscrito}
                    onChange={(e) => setValorEscrito(e.target.value)}
                    required
                    label="Valor por extenso"
                    size="small"
                    variant="filled"
                    autoComplete="valorEscrito"
                    sx={{
                      position: "absolute",
                      top: "157px",
                      left: "270px",
                      width: "780px",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                    fullWidth
                    label="Descrição"
                    size="small"
                    variant="filled"
                    autoComplete="descricao"
                    sx={{
                      position: "absolute",
                      top: "212px",
                      left: "270px",
                      width: "780px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    required
                    fullWidth
                    label="Cidade"
                    size="small"
                    variant="filled"
                    autoComplete="cidade"
                    sx={{
                      position: "absolute",
                      top: "301px",
                      left: "360px",
                      width: "270px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                    label="Data ex:( 11 de Novembro de 2021 )"
                    size="small"
                    variant="filled"
                    autoComplete="data"
                    sx={{
                      position: "absolute",
                      top: "301px",
                      left: "660px",
                      width: "400px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={recebeNome}
                    onChange={(e) => setRecebeNome(e.target.value)}
                    required
                    label="Quem recebeu"
                    autoFocus
                    size="small"
                    variant="filled"
                    autoComplete="recebeNome"
                    sx={{
                      position: "absolute",
                      top: "396px",
                      left: "180px",
                      width: "330px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                    label="CPF ou RG"
                    size="small"
                    variant="filled"
                    autoComplete="cpf"
                    sx={{
                      position: "absolute",
                      top: "396px",
                      left: "660px",
                      width: "390px",
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  position: "absolute",
                  top: "510px",
                  left: "360px",
                  width: "390px",
                }}
              >
                Criar PDF
              </Button>
              <Grid container justifyContent="flex-end"></Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Recibo;
