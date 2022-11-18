import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function Detail() {
    const params = useParams()
    const [data, setData] = useState<any>({})

    useEffect(() => {
        async function fetchData() {
            const res = await axios(`http://localhost:8001/post/${params.title}`)
            setData(res.data)
        }
        fetchData()
    } , [])

        return (
        <div>
          
            <p>{data.id}</p>
            <p>{data.title}</p>
            {/* {data.length >= 0 && data.map((Td) => (
                <div key={Td.id} style={{border:'1px solid #dbdbdb'}}>   
                 <p>{Td.id}</p> 
                 <p>{Td.title}</p> 
                 <p>{Td.description}</p>
                </div>
            ))}  */}
        </div>
    )
}
export default Detail