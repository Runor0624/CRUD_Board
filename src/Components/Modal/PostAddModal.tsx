import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components"

function PostAddModal () {
    const [title, setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [subDescription, setSubDescription] = useState('')
    const [price, setPrice] = useState('')

    const onChangeTitle = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    },[])

    const onChangeDescription = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    },[])

    const onChangeSubDescription = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setSubDescription(e.target.value)
    },[])

    const onChnagePrice = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value)
    },[])

    const onSubmit = useCallback((e:React.FormEvent) => {
        e.preventDefault()
        axios.post(`http://localhost:8001/post`, {
            headers: {
                "Content-Type": "application/json"
            },
            title,
            price,
            description,
            subDescription
        })
        .then((res) => {
            alert('작성완료!')
        })
        .catch((error) => {
            console.error(error)
            alert('작성 실패')
        })
    },[title,price,description,subDescription])

    return (
<Container>
    <input name='title' type='text' onChange={onChangeTitle} tabIndex={1} />
    <input name='description' type='text' onChange={onChangeDescription} tabIndex={2}/>
    <input name='subDescription' type='text' onChange={onChangeSubDescription} tabIndex={3} />
    <input name='price' type='text' onChange={onChnagePrice} tabIndex={4}/>
    <button type="submit" onClick={onSubmit}>게시</button>
    <p>1</p>
</Container>
    )
}

const Container = styled.div`
width: 400px;
height: 50vh;
margin: auto;
border: 1px solid #dbdbdb;
border-radius: 5px;
`;
export default PostAddModal