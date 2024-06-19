import React, { useEffect, useState } from 'react'
import CardComp from '../../Components/Card'
import ModulePage from '../ModulePage/ModulePage'

const CardsPage = () => {
    const link = "http://dummyjson.com/users"
    const [data, setData] = useState([])
    const [detail, setDetail] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(`${link}`)
                const { users } = await resp.json()
                setData(users)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    const deleteCard = (item) => {
        const filteredCards = data.filter(elem => elem.id !== item.id)
        setData(filteredCards)
    }
    return (
        <div id='cards'>
            <div className="main-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
                {detail ? <ModulePage setDetail={setDetail} elems={detail}/> : null}
                    {
                        data.map((item, i) => (
                            <CardComp key={i} name={item.firstName} role={item.company.title} exp={item.age} crypto={item.crypto.coin ? item.crypto.coin : "Unavaliable"} image={item.image} fn1={() => setDetail(item)} fn={() => deleteCard(item)} />
                        ))
                        
                        ||
                        "Waiting..."
                    }       
                </div>
            </div>
        </div>
    )
}

export default CardsPage