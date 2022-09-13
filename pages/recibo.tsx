import { useRouter } from "next/router";
import { useEffect } from "react";

import styles from "../styles/Styles.module.scss";

/*  {numeroRecibo,
      valor,
      nome,
      descricao,
      cidade,
      nomeRecebedor,
      numeroCpfRg,} = query; */

export default function Recibo() {
  const { query } = useRouter();

  useEffect(() => {
    if (query.isFallback) {
      console.log("loading");
    } else {
      console.log(query);
    }
  }, [query]);

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
        
      </>
    </div>
  );
}
