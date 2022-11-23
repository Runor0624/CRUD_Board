import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ITypes {
    id: number;
    title: string;
    subDescription: string;
    description: string;
    price: string;
    Discount: string;
}

function Tables() {
    const navigate = useNavigate()
    const [data,setData] = useState<ITypes[]>([])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`http://localhost:8001/post`)
            setData(res.data)
        }
        fetchData()
    })

    return (
        <div>
            <TableContainer>
                <TableHead>
                    <tr>
                        <TH>Title</TH>
                        <TH>Price</TH>
                        <TH>Discount</TH>
                        <TH>Description</TH>
                    </tr>

                </TableHead>
                <TableBody>
                    <tr>
                        {data.map((datas) => {
                            return (
                                <>
                                <TD onClick={() => navigate(`/${datas.title}`)}>{datas.title}</TD>
                                <TD>{[datas.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</TD>
                                <TD>{[datas.Discount].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</TD>
                                <TD>{datas.description}</TD>
                                </>
                            )
                        })}
                    </tr>
                </TableBody>
            </TableContainer>
        </div>
    )
}

const TableContainer = styled.table`
max-width: 1920px;
width: 100%;
height: 10vh;
margin: auto;
margin-top: 50px;
`;

const TableHead = styled.thead`
background-color: #dbdbdb;

`;

const TH = styled.th`
padding-top: 10px;
padding-bottom: 20px;
font-size: 17px;
font-weight: bold;
`;

const TD = styled.td`
padding-top: 10px;
padding-bottom: 20px;
font-size: 15px;
text-align: center;
`;

const TableBody = styled.tbody`
background-color: aliceblue;

`;
export default Tables 