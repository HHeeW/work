import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const PostCode = ({closePop}) => {
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if(data.addressType === 'R') {
            if(data.bname !== '') {
                extraAddress += data.bname;
            }
            if(data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}`:data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        closePop()
    }
    return (
        <>
           <DaumPostcode onComplete={handlePostCode} />
           <button type='button' onClick={()=>{onClose()}} />
        </>
    )
}

export default PostCode;