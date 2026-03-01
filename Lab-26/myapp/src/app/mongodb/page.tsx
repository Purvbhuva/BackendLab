"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {
    const [data, setData] = useState<any>([]);
    
    const [loading, setLoading] = useState<boolean>(true)
    
    const router = useRouter();
    
    const fetchData = async () => {
        try {
            const res = await fetch(`/api/user`);
            const temp = await res.json();
            setData(Array.isArray(temp) ? temp : [])
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]);
            setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">City</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && 
            <tr>
                <td colSpan={5}>
                    Loading data...
                </td>
            </tr>
            }
            {Array.isArray(data) && data.map((d: any) => {
                return(
                    <tr key={d._id}>
                        <td>{d._id}</td>    
                        <td>{d.First}</td>
                        <td>{d.Last}</td>
                        <td>{d.City}</td>
                        <td>
                            <button onClick={() => {
                                router.push(`/mongodb/${d._id}`)
                            }}>
                                View More
                            </button>
                        </td>
                    </tr>
                )
            })}
          </tbody>
        </table>
        </>
    )
}

export default page