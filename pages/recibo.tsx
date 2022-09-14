import React, { useState } from "react";
import jsPDF from "jspdf";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.module.scss";

export function Recibo() {
  const [numeroRecibo, setNumeroRecibo] = useState('1');
  const [valor, setValor] = useState('300');
  const [pagador, setPagador] = useState('João');
  const [valorEscrito, setValorEscrito] = useState("Trezentos Reais");
  const [descricao, setDescricao] = useState('Conserto de televisão');
  const [cidade, setCidade] = useState('Diadema');
  const [data, setData] = useState('21 de Setembro de 2022');
  const [recebeNome, setRecebeNome] = useState('Davi');
  const [cpf, setCpf] = useState('111.111.111.111');

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

  return (
    <div className="App body-recibo container mt-5">
      <button className="btn btn-primary" onClick={printDocument}>
        Export To PDF
      </button>
      <div id="divToPrint" className="m-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="d-flex flex-row p-2">
                <div className="d-flex flex-column">
                  {" "}
                  <span className="font-weight-bold">Tax Invoice</span>{" "}
                  <small>INV-001</small>{" "}
                </div>
              </div>

              <hr />
              <div className="table-responsive p-2">
                <table className="table table-borderless">
                  <tbody>
                    <tr className="add">
                      <td>To</td>
                      <td>From</td>
                    </tr>
                    <tr className="content">
                      <td className="font-weight-bold">
                        Google <br />
                        Attn: Jassa Smith Pymont <br />
                        Australia
                      </td>
                      <td className="font-weight-bold">
                        Facebook <br /> Attn: Jassa Right Polymont <br /> USA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr className="hr-division" />
              <div className="products p-2">
                <table className="table table-borderless">
                  <tbody>
                    <tr className="add">
                      <td>Description</td>
                      <td>Days</td>
                      <td>Price</td>
                      <td className="text-center">Total</td>
                    </tr>
                    <tr className="content">
                      <td>Website Redesign</td>
                      <td>15</td>
                      <td>$1,500</td>
                      <td className="text-center">$22,500</td>
                    </tr>
                    <tr className="content">
                      <td>Logo & Identity</td>
                      <td>10</td>
                      <td>$1,500</td>
                      <td className="text-center">$15,000</td>
                    </tr>
                    <tr className="content">
                      <td>Marketing Collateral</td>
                      <td>3</td>
                      <td>$1,500</td>
                      <td className="text-center">$4,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div className="products p-2">
                <table className="table table-borderless">
                  <tbody>
                    <tr className="add">
                      <td></td>
                      <td>Subtotal</td>
                      <td>GST(10%)</td>
                      <td className="text-center">Total</td>
                    </tr>
                    <tr className="content">
                      <td></td>
                      <td>$40,000</td>
                      <td>2,500</td>
                      <td className="text-center">$42,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div className="address p-2">
                <table className="table table-borderless">
                  <tbody>
                    <tr className="add">
                      <td>Bank Details</td>
                    </tr>
                    <tr className="content">
                      <td>
                        {" "}
                        Bank Name : ADS BANK <br /> Swift Code : 00220022 <br />{" "}
                        Account Holder : Jassa Pepper <br /> Account Number :
                        6953PO789 <br />{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recibo;
