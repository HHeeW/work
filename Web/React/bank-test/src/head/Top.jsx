import React from 'react'
import './header.css'
const Top = () => {
  return (
    <header>
        <a href="#"><img src="images/logo.png" alt="logo"/></a>
        <nav>
            <ul class="gnb">
                <li><a href="#">탑</a></li>
                <li><a href="#">아우터</a></li>
                <li><a href="#">팬츠</a></li>
                <li><a href="#">악세서리</a></li>
            </ul>
            <ul class="lnb">
                <li>
                    <a href="#">블라우스</a>
                    <a href="#">티</a>
                    <a href="#">셔츠</a>
                    <a href="#">니트</a>
                </li>
                <li>
                    <a href="#">자켓</a>
                    <a href="#">코트</a>
                    <a href="#">가디건</a>
                    <a href="#">머플러</a>
                </li>
                <li>
                    <a href="#">청바지</a>
                    <a href="#">짧은바지</a>
                    <a href="#">긴바지</a>
                    <a href="#">레깅스</a>
                </li>
                <li>
                    <a href="#">귀고리</a>
                    <a href="#">목걸이</a>
                    <a href="#">반지</a>
                    <a href="#">팔찌</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Top