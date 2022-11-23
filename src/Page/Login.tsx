import {AiOutlineEye} from 'react-icons/ai'
import React, { useState, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {Container, Label, Title, LoginButton, LoginInfoBox, LoginInfoText, Input, SignUpText} from '../style/Login'

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
            <AiOutlineEye onClick={toggleHidePassword} style={{position:'absolute', top:'360px', left:'800px', cursor:'pointer'}}/>
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
export default Login 