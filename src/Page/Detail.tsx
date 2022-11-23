import axios from "axios"
import React, { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"
import {AiOutlineDelete, AiTwotoneEdit} from 'react-icons/ai'
import { faker } from "@faker-js/faker"
import { Container,Image,Title,Text,PriceText,PriceBox,ModifyContainer,CommentAddButton,CommentInput,CommentText,CommentTextTitle } from "style/Detail"
import Swal from "sweetalert2"

function Detail() {
    const params = useParams()
    const [data, setData] = useState<any>({})
    const [isModifyModal, setIsModifyModal] = useState(false)
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [subDescription, setSubDescription] = useState('')
    const [comment, setComment] = useState('')
    const [priceCount, setPriceCount] = useState(1)

    const PlusPriceCount = () => {
        setPriceCount(prevCount => prevCount + 1)
    }

    const MinusPriceCount = () => {
        setPriceCount(prevCount => prevCount -1)
    }

    const priceTotal = priceCount * data.price

    const onChangeComment = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    },[])

    const onChangePrice = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value)
    },[])

    const onChangeDescription = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    },[])

    const onChangeSubDescription = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSubDescription(e.target.value)
    },[])

    const onPostModifySubmit = useCallback((e:React.FormEvent) => {
        e.preventDefault()
        axios.patch(`http://localhost:8001/post/${params.title}`, {
            headers: {
                "Content-Type": "application/json"
            },
            price,
            description,
            subDescription
        })
        .then((res) => {
            Swal.fire({
                title: '수정을 성공했어요!',
            timer: 3000
            })
            window.location.replace(`/${params.title}`)
        })
        .then((error) => {
            console.error(error)
        })
    },[price, description, subDescription])
    
    const onPostCommentAdd = useCallback((e:React.FormEvent) => {
        e.preventDefault()

        const Data = {
            id: `${params.title}`,
            comment: comment
        }

        axios.post(`http://localhost:8001/comment/${params.title}/comment`, Data)
        .then((response) => {
            Swal.fire({
                title: '댓글 작성을 성공했어요!',
            timer: 3000
            })
             window.location.replace(`/${params.title}`)
        })
        .catch((error) => {
            console.error(error)
        })
    },[comment])

    useEffect(() => {
        async function fetchData() {
            const res = await axios(`http://localhost:8001/post/${params.title}`)
            setData(res.data)
        }
        fetchData()
    } , [])

    const handleModifyModalControl = () => {
        setIsModifyModal(!isModifyModal)
    }

    const onDeleteButton = () => {
        async function DeleteData() {
            await axios.delete(`http://localhost:8001/post/${params.title}`)
        }
        DeleteData()
        Swal.fire({
            title: '삭제를 성공했어요!',
        timer: 3000
        })
        window.location.replace(`/`)
    }

        return (
        <>
        <Container>
            <AiOutlineDelete onClick={onDeleteButton} style={{position:'absolute', left: '1050px', top: '60px', cursor:'pointer'}}>삭제</AiOutlineDelete>
            <AiTwotoneEdit  onClick={handleModifyModalControl} style={{position:'absolute', left: '1080px', top: '60px', cursor:'pointer'}}/>

            <Image src={faker.image.city()} alt="City" />
            <Title>{data.title}</Title>
            <Text>{data.description}</Text>
            <Text>{data.subDescription}</Text>
            <PriceText>{[priceTotal].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</PriceText>

            <PriceBox>
            <button onClick={MinusPriceCount} disabled={priceCount < 2}>-</button>
            <input type="number" value={priceCount} />
            <button onClick={PlusPriceCount}>+</button>
            </PriceBox>

            <CommentTextTitle>댓글 </CommentTextTitle>
            {data.Comments && data.Comments.map((dataT:any) => {
                return (
                    <div key={dataT.commenter}>
                        <CommentText>{dataT.comment}</CommentText>
                    </div>
                )
            })}

                <CommentInput placeholder="댓글을 입력하세요.." name="comment" type="text" value={comment} onChange={onChangeComment} />
                <CommentAddButton type="submit" onClick={onPostCommentAdd}>댓글 게시</CommentAddButton>
            </Container>

            {isModifyModal === true ?
            <ModifyContainer>
                <label>설명</label>
                <input name='description' type='text' onChange={onChangeDescription} tabIndex={2}/>
    
                <label>추가 설명</label>
                <input name='subDescription' type='text' onChange={onChangeSubDescription} tabIndex={3} />
    
                <label>가격</label>
                <input name='price' type='number' onChange={onChangePrice} tabIndex={4}/>
                <button type="submit" onClick={onPostModifySubmit}>게시</button>
            </ModifyContainer>
            :<></>}
        </>
    )
}
export default Detail