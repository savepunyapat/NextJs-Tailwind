import React from 'react'
import Link from 'next/link'
type Props = {}

export default function notFound({}: Props) {
  return (
    <div className='flex flex-col items-center min-h-screen justify-center'>
        <div className='flex flex-col space-y-4 w-96 text-start'>
            <h1 className='text-4xl font-bold'>404 Not found</h1>
            <Link href={'/home'}>&larr; Back to Home </Link>

        </div>
    </div>
  )
}