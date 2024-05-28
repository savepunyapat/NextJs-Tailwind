import React from 'react'
import BlogPage from './Blog'
import { Metadata } from 'next'
type Props = {}
export const metadata : Metadata = {
  title: 'Blog',
};

export default function page({}: Props) {
  return (
    <>
        <BlogPage />
    </>
    )
}