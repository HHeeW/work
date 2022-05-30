import styled from '@emotion/styled'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

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

const RestLists = () => {
  return (
    <ABlock>
        <ImgItem><img src="https://picsum.photos/id/237/220/180" alt="" /></ImgItem>
        <TypeBox>
            <h2>에노크 샌드위치 맛집</h2>
            <p>신선한재료, 푸짐한 혼합</p>
            <p>우수상점</p>
        </TypeBox>
        <AreaBox>
            <LocationOnOutlinedIcon sx={{fontSize:40}}/>
        </AreaBox>
    </ABlock>
  )
}

export default RestLists