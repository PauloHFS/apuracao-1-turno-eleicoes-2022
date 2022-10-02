import axios from 'axios';

setInterval(async () => {
  try {
    const { data } = await axios(
      'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json'
    );

    const { hg: horas, cand: candidatos } = data;

    console.log(`------------ ${horas} ------------`);
    console.table(
      candidatos.map(
        ({ n: Numero, nm: Nome, vap: Votos, pvap: Porcentagem }) => {
          return {
            Numero,
            Nome,
            Votos,
            Porcentagem,
          };
        }
      )
    );
  } catch (error) {
    console.error(error);
  }
}, 1 * 60 * 1000);
