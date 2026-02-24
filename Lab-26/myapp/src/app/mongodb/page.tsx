"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const router = useRouter();
    const fetchData = async () => {
        const res = await fetch(`/api/user`);
        const temp = await res.json();
        setData(temp)
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">City</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && 
            <tr>
                <td colSpan={5}>
                    Loading data
                </td>
            </tr>
            }
            {data.map((d:any)=>{
                return(
                    <tr key={d._id}>
                <td>{d._id}</td>    
                <td>{d.First}</td>
                <td>{d.Last} </td>
                <td>{d.City} </td>
                <td><button onClick={()=>{router.push(`/mongodb/${d._id}`)}}>view more</button></td>
                </tr>
                
                )
                
            })}
          </tbody>
        </table>

      
        </>
    )
}

export default page