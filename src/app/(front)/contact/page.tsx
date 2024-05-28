import React from 'react'
import ContactPage from './Contact'
import { Metadata } from 'next'
type Props = {}
export const metadata : Metadata = {
  title: 'Contact',
};

export default function page({}: Props) {
  return (
    <>
        <ContactPage />
    </>
  )
}