"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page({ params }: { params: { id: string } }) {
    const { id } = useParams();
    
    const [data, setData] = useState<any>([])

    const fetchData = async () => {
        try {
            const res = await fetch(`/api/users/${id}`)
            const temp = await res.json()
            console.log(temp)
            
            setData(temp.rows[0]);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <div>
            <h1>Name: {data.full_name}</h1>
            <h2>Email: {data.email}</h2>
            <h3>Phone: {data.phone}</h3>
        </div>
    )
}

export default page