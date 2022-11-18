import axios from "axios"
import React, { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"


function Detail() {
    const params = useParams()
    const [data, setData] = useState<any>({})
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [subDescription, setSubDescription] = useState('')
    const [comment, setComment] = useState('')

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
            alert('111')
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
            alert('댓글게시 성공')
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

    const onDeleteButton = () => {
        async function DeleteData() {
            await axios.delete(`http://localhost:8001/post/${params.title}`)
        }
        DeleteData()
    }

    
        return (
        <div>
            <p>{data.id}</p>
            <p>{data.title}</p>
            {data.Comments && data.Comments.map((dataT:any) => {
                return (
                    <div key={dataT.commenter}>
                        <p>{dataT.comment}</p>
                    </div>
                )
            })}
            <button onClick={onDeleteButton}>삭제</button>

            <div>
    <input name='description' type='text' onChange={onChangeDescription} tabIndex={2}/>
    <input name='subDescription' type='text' onChange={onChangeSubDescription} tabIndex={3} />
    <input name='price' type='text' onChange={onChangePrice} tabIndex={4}/>
    <button type="submit" onClick={onPostModifySubmit}>게시</button>
            </div>



<input name="comment" type="text" value={comment} onChange={onChangeComment} />
<button type="submit" onClick={onPostCommentAdd}>댓글 게시</button>
        </div>
    )
}
export default Detail