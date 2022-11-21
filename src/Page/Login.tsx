import styled from "styled-components";
import {AiOutlineEye} from 'react-icons/ai'
import React, { useState, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    const goToSignUp = () => {
        navigate('/signup')
    }
    
    const [isPasswordTextToggle, setIsPasswordTextToggle] = useState(true)

    const toggleHidePassword = () => {
        setIsPasswordTextToggle(!isPasswordTextToggle)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    },[])

    const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    },[])

    const onSubmit = useCallback((e:React.FormEvent) => {
        e.preventDefault()
        axios.post(`http://localhost:8001/user/login`, {
            headers: {
                "Content-Type": "application/json"
            },
            email,
            password
        })

        .then((res) => {
            Swal.fire({
                title: '로그인에 성공했어요!',
                timer:2000
            })
            window.localStorage.setItem('loginToken', res.data.jwtToken)
            navigate('/')
        })

        .catch((error) => {
            Swal.fire({
                title: '로그인에 실패했어요!',
                timer: 2000
            })
            console.error(error)
        })

    },[email,password])

    const isFormValid = email.includes('@') && email.length > 5 && password.length > 10

    return (
        <Container>
            <Title>Logo</Title>

            <LoginInfoBox>
            <Label>이메일 </Label>
            <Input name="email" type="email" onChange={onChangeEmail} tabIndex={1} placeholder="이메일을 입력해주세요"/>
            <AiOutlineEye onClick={toggleHidePassword} style={{position:'absolute', top:'330px', left:'700px', cursor:'pointer'}}/>
            {email.length && email.includes('@') ? <></> : <LoginInfoText>Email에는 @가 들어가야 합니다.</LoginInfoText>}

            <Label>비밀번호</Label>
            <Input name="password" type={isPasswordTextToggle ? 'password' : 'text'} onChange={onChangePassword} tabIndex={2} placeholder="비밀번호를 입력해주세요" />
            {password.length > 1 && password.length < 11 ? <></> : <LoginInfoText>비밀번호는 11자 이상 입력해야 합니다</LoginInfoText>}

            </LoginInfoBox>

            <LoginButton type="submit" disabled={!isFormValid} onClick={onSubmit}>로그인</LoginButton>
            <SignUpText onClick={goToSignUp}>회원이 아닌가요? 가입하기</SignUpText>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid #dbdbdb;
border-radius: 5px;
margin: auto;
margin-top: 15vh;
width: 350px;
height: 400px;
`;

const Title = styled.h1`
font-size: 40px;
font-weight: bold;
text-align: center;
padding-bottom: 10px;
`;

const LoginInfoText = styled.p`
padding-top: 10px;
padding-bottom: 15px;
font-size: 13px;
color: red;
font-weight: bold;
text-align: center;
`;

const LoginInfoBox = styled.div`
display: flex;
flex-direction: column;
`;

const Label = styled.label`
font-size: 15px;
font-weight: bold;
padding-top: 30px;
padding-left: 50px;
padding-bottom: 10px;
padding-right: 20px;
`;

const Input = styled.input`
width: 250px;
height: 30px;
align-self: center;
border-radius: 5px;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px solid #dbdbdb;
border-bottom-style: dashed;
`;

const LoginButton = styled.button`
font-size: 16px;
font-weight: bold;
width: 300px;
height: 40px;
align-self: center;
border: #0095f6;
border-radius: 5px;
background-color: initial;
cursor: pointer;

&:active {
    background-color: #0095f6;
}

&:disabled {
    background-color: #0095f6;
    opacity: 0.4;
}
`;

const SignUpText = styled.p`
padding-top: 10px;
font-size: 14px;
font-weight: bold;
text-align: center;
color: #dbdbdb;
cursor: pointer;
`;

export default Login 