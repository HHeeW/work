import styled from 'styled-components'
import { Login, PersonAdd, Search } from '@styled-icons/material'

// CSS
const Header = styled.div`
  height: 100px;
`
const FixBox = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  width:100%;
  background-color: #fff;
`
const TopNav = styled.div`
  margin: 0 auto;
  padding : 0;
  width: 1200px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`  
const LogoBox = styled.div`
  width: 20%;
  height 100%;
`
const Logo = styled.a`
  margin-left: 0;
  display: block;
  width:70%;
  height:100px;
  background: url(images/logo.png) no-repeat center;
  background-size: contain;
`
const MenuBox = styled.div`
  height: 100%;
  width:55%;
`
const Menu = styled.ul`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
`
const MovieBox = styled.li``
const TicketBox = styled.li``
const StoreBox = styled.li``
const EventBox = styled.li``
const Movie = styled.a``
const Ticket = styled.a``
const Store = styled.a``
const Event = styled.a``

const Member = styled.div`
  height: 100%;
  width:25%;
  display:flex;
  justify-content:flex-end;
  align-items: center;
  padding-right: 30px;
  cursor: pointer;
`
const LoginBox = styled.div`
  display:flex;
  justify-content:column;
  align-items: center;
`
const SignUpBox = styled.div`
`
const SerchBox = styled.div`

`



function Topnav() {
  return (
    <Header>
      <FixBox>
        <TopNav>  
          <LogoBox>
            <Logo href='#' /> 
          </LogoBox>
          <MenuBox>
            <Menu>
              <MovieBox><Movie href='#'>영화</Movie></MovieBox>
              <TicketBox><Ticket href='#'>예매</Ticket></TicketBox>
              <StoreBox><Store href='#'>스토어</Store></StoreBox>
              <EventBox><Event href='#'>이벤트</Event></EventBox>
            </Menu>
          </MenuBox>
          <Member>
            <LoginBox>
              <Login size={40} />
              로그인
            </LoginBox>
            <SignUpBox>
              <PersonAdd size={40} />
              회원가입
            </SignUpBox>
            <SerchBox>
              <Search size={40} />
              검색
            </SerchBox>
          </Member>
        </TopNav>
      </FixBox>
      </Header>
  )
}

export default Topnav