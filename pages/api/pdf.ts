import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

var linkGenerator: string;

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
        const {
            numeroRecibo,
            valor,
            nome,
            descricao,
            cidade,
            nomeRecebedor,
            numeroCpfRg } = req.body;

        linkGenerator = `${process.env.PROCESS_PUBLIC_SITE!}?numeroRecibo=${numeroRecibo}
        &valor=${valor}
        &nome=${nome}
        &descricao=${descricao}
        &cidade=${cidade}
        &nomeRecebedor=${nomeRecebedor}
        &numeroCpfRg=${numeroCpfRg}`



        /* return pdf */
        printPDF().then((pdf) => {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=recibo.pdf');  /* //download PDF */
            res.send(pdf)
        });
    }

}