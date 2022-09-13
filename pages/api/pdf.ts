import { link } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';


var linkGenerator:string;

async function printPDF() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(linkGenerator, { waitUntil: "networkidle0" });
    await page.emulateMediaType('screen')
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();
    console.log(`link do pdf ( ${linkGenerator} )`);
    return pdf;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        const { nome } = req.body;
        console.log(req.body)
        linkGenerator = `https://www.google.com/${nome}`

        /* return pdf */
        printPDF().then((pdf) => {
            res.setHeader('Content-Type', 'application/pdf');
            /* res.setHeader('Content-Disposition', 'attachment; filename=recibo.pdf'); */ //download PDF
            res.send(pdf)
        });
    }

}