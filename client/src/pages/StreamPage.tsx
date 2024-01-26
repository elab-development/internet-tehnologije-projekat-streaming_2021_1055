import React from 'react'
import Navbar from '../components/Navbar'
import { useStream } from '../hooks'

export default function StreamPage() {
    const { loading, data } = useStream();

    if (loading) {
        return null;
    }
    return (
        <div>
            <Navbar />
            <iframe width='100%' height={800} src={data} ></iframe>
        </div>
    )
}
