import { useRouter } from "next/router";
import { useEffect, useState } from "react";



import styles from "../styles/Styles.module.scss";

////localhost:3000/recibo?numeroRecibo=1&valor=200&nome=Davi&descricao=pagamento%20de%20salario&cidade=Diadema&nomeRecebedor=Marcos&numeroCpfRg=1111111


/* {
"numeroRecibo":"12345",
"valor":"200",
"nome":"Davi",
"descricao":"pagamento de salario",
"cidade":"Diadema",
"nomeRecebedor":"Marcos",
"numeroCpfRg":"1111111"
} */


/*  {numeroRecibo,
      valor,
      nome,
      descricao,
      cidade,
      nomeRecebedor,
      numeroCpfRg,} = query; */

export default function Recibo() {
  const { query } = useRouter();

  const [queryData, setQueryData]: any = useState({
    numeroRecibo: 0,
    valor: 0,
    nome: "Lorem Ipsum",
    descricao: "zero",
    cidade: "Lorem Ipsum",
    nomeRecebedor: "Nome",
    numeroCpfRg: 1111111111111,
  });

  useEffect(() => {
    if (query.isFallback) {
      console.log("loading");
    } else {
      setQueryData(query);
      console.log(queryData);
    }
  }, [query, queryData]);

  const {
    numeroRecibo,
    valor,
    nome,
    descricao,
    cidade,
    nomeRecebedor,
    numeroCpfRg,
  } = queryData;

  ///quantia = valor escrito

  const today: Date = new Date();

  const monthString = () => {
    switch (
      today.getMonth() + 1 //today.getMonth() + 1   função para achar mês
    ) {
      case 1:
        return "janeiro";
      case 2:
        return "fevereiro";
      case 3:
        return "março";
      case 4:
        return "abril";
      case 5:
        return "maio";
      case 6:
        return "junho";
      case 7:
        return "julho";
      case 8:
        return "agosto";
      case 9:
        return "setembro";
      case 10:
        return "outubro";
      case 11:
        return "novembro";
      case 12:
        return "dezembro";
      default:
        break;
    }
  };

  return (
    <div>
      <>
        Data do Recibo:
        {` ${today.getDate()} de ${monthString()} de ${today.getFullYear()}`}
        <p>{`${numeroRecibo},  ${valor} ${nome}, ${descricao}, ${cidade}, ${nomeRecebedor}, ${numeroCpfRg}`}</p>
      </>
    </div>
  );
}
