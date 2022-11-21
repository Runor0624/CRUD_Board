import axios from "axios";
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container,Title,Input,Label,Button,LoginText } from "style/SignUp";
import Swal from "sweetalert2";


function SignUp() {
    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        userName: "",
        phonenumber: ""
    })

    const inputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setInputValue({...inputValue, [name]: value})
    }

    const {email, password, userName, phonenumber} = inputValue

    const onSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault()
    
        axios.post('http://localhost:8001/user/signup', {
             
          email,
          password,
          userName,
          phonenumber
        })
        .then((res) => {
          Swal.fire({
            title: '회원가입에 성공했어요!',
        })
        navigate('/login')
        })
    
        .catch((error) => {
            console.error(error)
        })
    
      },[email,  password, userName, phonenumber])

    return (
        <Container>
            <Title>SignUp</Title>

            <Label>Email</Label>
            <Input name="email" type="email" value={email} onInput={inputValues} tabIndex={1} placeholder="이메일을 입력하시오." />

            <Label>Password</Label>
            <Input name="password" type="password" value={password} onInput={inputValues} tabIndex={2} placeholder="비밀번호를 입력하시오." />

            <Label>UserName</Label>
            <Input name="userName" type="text" value={userName} onInput={inputValues} tabIndex={3} placeholder="사용할 유저명을 입력하시오." />
            
            <Label>PhoneNumber</Label>
            <Input name="phonenumber" type='text' value={phonenumber.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{0,4})(\d{4})$/, `$1-$2-$3`)} onInput={inputValues} tabIndex={5} placeholder="핸드폰 번호를 입력하시오." />

            <Button type='submit' onClick={onSubmit}>회원가입</Button>
        <LoginText onClick={() => navigate('/login')}>이미 회원인가요? 로그인페이지로 가기</LoginText>
        </Container>
    )
}
export default SignUp 