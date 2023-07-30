import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
const Images = () => {
    const [data, setData] = useState([])
    const [title, setTitle] = useState(1)
    const [search, setSearch] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${search}`)
            .then(response => setData(response.data))
    }, [search])

    return (
        <div>
            <input type="text" value={title} onChange={(evt) => setTitle(evt.target.value)} />
            <button onClick={() => {
                setSearch(title)
            }}><AiOutlineSearch/></button>
            <div className="data-css">{JSON.stringify(data)}</div>
            <img src={data.url} />
        </div>
    )
}
export default Images