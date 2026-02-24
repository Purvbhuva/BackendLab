"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page({params}: {params: {id:string}}) {
    const {id} = useParams();
    const [data,setData]= useState<any>([])

    const fetchData=async()=>{
        const res =  await fetch(`/api/users/${id}`)
        const temp= await res.json()

        setData(temp.rows[0]);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
        <h1>{data.full_name}</h1>
        <h2>{data.email}</h2>
        <h3>{data.phone}</h3>
    </div>
  )
}

export default page