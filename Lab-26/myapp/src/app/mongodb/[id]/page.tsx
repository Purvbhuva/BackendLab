"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page({ params }: { params: { id: number } }) {
    const { id } = useParams();
    
    const [data, setData] = useState<any>([])

    const fetchData = async () => {
        try {
            const res = await fetch(`/api/user/${id}`)
            const temp = await res.json()
            setData(temp);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <div>
            <h2>First Name: {data.First}</h2>
            <h2>Last Name: {data.Last}</h2>
            <h2>City: {data.City}</h2>
        </div>
    )
}

export default page