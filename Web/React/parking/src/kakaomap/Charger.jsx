import Api from '../Apit.json'
import ChargerList from './ChargerList';
const Charger = (props) => {
      let charge = [];
      for(let i in Api.item){
        charge[i] = <ChargerList
        key={i}
        lat={Api.item[i].lat}
        lng={Api.item[i].lng}
        title={Api.item[i].statNm}
        addr={Api.item[i].addr}
        useTime={Api.item[i].useTime}
        stat={Api.item[i].stat}
        chgerType={Api.item[i].chgerType}
        setLat={props.setLat} 
        setLng={props.setLng}
        />
      }
  return charge
}

export default Charger