import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap';
import cookie from 'react-cookies';
import logo from '../Logo.jpg';

const LoginForm = () => {

   const [isEmail, setIsEmail] = useState(false);
   const [isPass, setIsPass] = useState(false);  
   const [isLogin, setIsLogin] = useState(true);
   const [userEmail, setUserEmail] = useState('');
   const [userPass, setUserPass] = useState('');
   const [isRememEamil, setIsRememEmail] = useState(false);

   const validateEmail = (e) => {
       const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
       setUserEmail(e.target.value);
       if(emailRegex.test(userEmail)) {
          setIsEmail(false);
       }else {
          setIsEmail(true);
       }
   }
    //특수문자 적어도 1개 ,  길이가 최소 4자이상 최대 8자 이하
   const validatePass = (e) => {
       const passRegex = e.target.value.search(/[`~!@@#$%^&*|\\\'\";:\?]/gi);
       setUserPass(e.target.value);
       if((userPass.length <= 8 && e.target.value.length >= 4) && passRegex >= 1) {
           setIsPass(false);
       }else{
           setIsPass(true);
       }
   }

   const 서브밋 = () => {
      
   }
   const isRememberEmail = (e) => {
      setIsRememEmail(!isRememEamil);
   }

   const validateLogin = () => {
      console.log(isEmail, isPass);
      if(userPass && userEmail) {
         if(isEmail === false && isPass === false) {
            setIsLogin(false)
         }else{
            setIsLogin(true)
         }
      }
   }
   useEffect(()=>{
       validateLogin(); 
   }, [isEmail, isPass]);
  return (
    <section className="login-main">
        <div className="mylogo">
            <img src={logo} className="rounded-circle" />
        </div>
        <h2 className="text-center">로그인</h2>
        <Form className="form" onSubmit={서브밋}>
            <FormGroup color="danger">
                <Label for="userEmail">이메일</Label>
                <Input type="email" name="userEmail" 
                       id="userEmail" placeholder="example@example.com" 
                       onChange={validateEmail} /> 
            { isEmail ?          
                <FormText color="danger">아이디를 정상적으로 입력해주세요. 아이디는 이메일 형식입니다.</FormText>       
            : ''
            }
            </FormGroup>
            <FormGroup>
                <Label for="userPassword">
                    비밀번호
                </Label>
                <Input 
                   type="password"
                   name="userPass"
                   id="userPassword"
                   placeholder="*******"
                   onChange={validatePass}
                />
               { isPass?  
                <FormText color="danger">비밀번호는 4자이상 8자이하, 특수문자 포함이어야 합니다.</FormText>
               :''
                } 
            </FormGroup>
            <FormGroup className="text-end">
                <Label>
                    <Input 
                        type="checkbox"
                        name="rememberEmail"
                        value="1"
                        onChange={ isRememberEmail }
                        checked={isRememEamil}
                    /> 이메일 기억    
                </Label>
            </FormGroup>
            <div className="text-center btn-box">
                 <Button type="submit" color="primary" block disabled={isLogin}>로그인</Button>
            </div>
        </Form>
    </section>
  )
}

export default LoginForm