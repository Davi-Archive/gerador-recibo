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
        console.log(req.body)
        linkGenerator = `${process.env.PROCESS_PUBLIC_SITE!}?numeroRecibo=${numeroRecibo}
        &valor=${valor || 1}
        &nome=${nome || 1}
        &descricao=${descricao || 1}
        &cidade=${cidade || 1}
        &nomeRecebedor=${nomeRecebedor || 1}
        &numeroCpfRg=${numeroCpfRg || 1}`



        /* return pdf */
        printPDF().then((pdf) => {
            console.log(pdf)
            return res.status(200).setHeader("Content-disposition",
                "attachment; filename=" +
                "Example.pdf")
                .setHeader('Content-Type', 'application/pdf')
                .setHeader('Content-Length', 10000)
                .setHeader('responseType', 'arraybuffer')
                .send(pdf)
        });
    }

}