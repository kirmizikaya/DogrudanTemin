import axios from 'axios'
 
export class IdareService {

     getIdareler(text) {
        const url = "https://ekap.kik.gov.tr/EKAP/YeniIhaleAramaData.ashx?ES=&ihaleidListesi=";
        const params = {
            'method' : 'idareAra',
            'aranan' : text
        }

        const headers =  { 
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          };
        return axios.get('/', {
            params: {
                'method' : 'idareAra',
                'aranan' : text 
            }
        }
          )
            .then(res => res);
    }
}