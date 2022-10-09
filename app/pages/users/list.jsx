import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import LinkButton from '../../components/LinkButton'
//fetch data from api/users/getusers

export default function List() {
    const [users, setUsers] = useState([])

    const onSubmit = async () => {
        const data = await fetch('/api/users/getusers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const usersData = await data.json()
        setUsers(usersData)
    };

    useEffect(() => {
        onSubmit();
    }, []);

    return (
        <>
            <div>
                <h1 className='font-bold'>Users</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.id} {' '}  {user.name} {' '} {user.email}</li>
                    ))}
                </ul>
            </div>
            <LinkButton text='Home' url='/' />
        </>
    )
}
