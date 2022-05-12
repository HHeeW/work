import React from "react-dom";
const PopupDom = ({Children}) => {
    const el = document.getElementById('popupDom');
  return ReactDOM.createPortal(Children,el);
}

export default PopupDom