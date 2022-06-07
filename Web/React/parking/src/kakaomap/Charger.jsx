import Api from '../Apit.json'
import ChargerList from './ChargerList';
const Charger = (props) => {
      let charge = [];
      for(let i in Api.response.body.items.item){
        charge[i] = <ChargerList
        key={i}
        lat={Api.response.body.items.item[i].lat}
        lng={Api.response.body.items.item[i].lng}
        title={Api.response.body.items.item[i].statNm}
        addr={Api.response.body.items.item[i].addr}
        useTime={Api.response.body.items.item[i].useTime}
        stat={Api.response.body.items.item[i].stat}
        chgerType={Api.response.body.items.item[i].chgerType}
        setLat={props.setLat} 
        setLng={props.setLng}
        />
      }
  return charge
}

export default Charger