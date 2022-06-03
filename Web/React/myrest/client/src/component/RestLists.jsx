
import styled from '@emotion/styled'
import {Roadview} from 'react-kakao-maps-sdk'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useEffect, useState } from 'react';

const ABlock = styled.div`
    margin:15px 20px 10px;
    display:flex;
    padding:15px;
    border-bottom:1px dashed #eee;
    &:hover{
        background:#fafafa;
    }
`
const ImgItem = styled.div`
    flex: 0 0 30%;
`
const TypeBox = styled.div`
    flex: 0 0 60%;
    padding-left:20px;
`
const AreaBox = styled.div`
    flex: 0 0 10%;
    align-self:center;
    padding-right:40px
`

const RestLists = ({id, sigun, title, tel, title_food, zip, address, adress_old, lati, long, radius}) => {
    const [lat, setLat]=useState('');
    const [lon, setLon]=useState('')
    const [rad, setRad]=useState('');

    useEffect(()=>{
        setLat(lati);
        setLon(long);
        setRad(radius);
    },[])
    
  return (
    <ABlock>
        <ImgItem>
            <Roadview position={{lat: lat, lng: lon, radius: rad}} styled={{width:"100%", height: "156px", borderRadius:"15px", }}/>
        </ImgItem>
        <TypeBox>
            <h2>{title}</h2>
            <p>{title_food}</p>
            <p>{sigun}</p>
        </TypeBox>
        <AreaBox>
            <LocationOnOutlinedIcon sx={{fontSize:40}}/>
        </AreaBox>
    </ABlock>
  )
}

export default RestLists