import React from "react";
import jsPDF from "jspdf";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.module.scss";


export function Recibo () {

 var dd = {
   content: [
     {
       text: "This is a header (whole paragraph uses the same header style)\n\n",
       style: "header",
     },
     {
       url:
         "https://therichpost.com/wp-content/uploads/2022/09/Build-Complete-Ecommerce-Website-with-Angular-14-364x225.png",
       width: 200,
     },
     {
       text: "Text over image",
       absolutePosition: { x: 100, y: 50 },
     },
   ],
 };

 var docDefinition = {
   content: [
     "hello",
     {
       // in browser is supported loading images via url from reference by name in images
       image: "snow",
     },
     {
       text: "This is a header (whole paragraph uses the same header style)\n\n",
       absolutePosition: { x: 100, y: 150 },
     },
     {
       image: "strawberries",
     },
   ],

   images: {
     mySuperImage: "data:image/jpeg;base64,...content...",

     // in browser is supported loading images via url (https or http protocol) (minimal version: 0.1.67)
     snow: "https://picsum.photos/seed/picsum/200/300",

     // is supported loading images via url with custom headers (minimal version: 0.2.5)
     strawberries: {
       url: "https://picsum.photos/id/1080/367/267",
       headers: {
         myheader: "123",
         myotherheader: "abc",
       },
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
                          Bank Name : ADS BANK <br /> Swift Code : 00220022{" "}
                          <br /> Account Holder : Jassa Pepper <br /> Account
                          Number : 6953PO789 <br />{" "}
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
