import axios from "axios";
import React, { useState, useCallback } from "react";
import { Container, Label, Input, Button } from "style/PostAddModal";
import Swal from "sweetalert2";


function PostAddModal () {
    const [title, setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [subDescription, setSubDescription] = useState('')
    const [price, setPrice] = useState('')
    const [Discount, setDiscount] = useState('')

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

    const onChangeDiscount = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setDiscount(e.target.value)
    }, [])

    const onSubmit = useCallback((e:React.FormEvent) => {
        e.preventDefault()
        axios.post(`http://localhost:8001/post`, {
            headers: {
                "Content-Type": "application/json"
            },
            title,
            price,
            description,
            subDescription,
            Discount
        })
        .then((res) => {
            Swal.fire({
                title: '게시글 작성을 성공했어요!',
            timer: 3000
            })
            window.location.replace(`/`)
        })
        .catch((error) => {
            console.error(error)
            Swal.fire({
                title: '글 작성에 실패했어요!',
                timer:2000
            })
        })
    },[title,price,description,Discount,subDescription])

    return (
<Container>
    <Label>제목</Label>
    <Input name='title' type='text' onChange={onChangeTitle} tabIndex={1} />
    
    <Label>설명</Label>
    <Input name='description' type='text' onChange={onChangeDescription} tabIndex={2}/>
    
    <Label>추가 설명</Label>
    <Input name='subDescription' type='text' onChange={onChangeSubDescription} tabIndex={3} />
    
    <Label>가격</Label>
    <Input name='price' type='number' onChange={onChnagePrice} tabIndex={4}/>

    <Label>할인가</Label>
    <Input name="Discount" type="text" onChange={onChangeDiscount} tabIndex={5} />
    <Button type="submit" onClick={onSubmit}>게시</Button>
</Container>
    )
}
export default PostAddModal