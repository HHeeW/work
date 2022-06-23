import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="container">
            <h2>CAFE</h2>
            <ul class="d-flex">
                <li><a href="#">서비스 약관/정책</a></li>
                <li><a href="#">권리침해신고</a></li>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">상거래 피해구제신청</a></li>
                <li><a href="#">카페운영정책</a></li>
                <li><a href="#">고객센터</a></li>
                <li><a href="#">문의하기</a></li>
            </ul>
            <p class="copy">&copy; Kokoa-copy Corp.</p>
        </footer>

        <a href="#" id="top"/>
        <span class="material-icons">
            keyboard_arrow_up
        </span>
    </div>
  )
}

export default Footer