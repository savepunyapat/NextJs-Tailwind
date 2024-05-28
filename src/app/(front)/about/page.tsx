import React from 'react'
import AboutPage from './About'
import { Metadata } from 'next'
type Props = {}
export const metadata : Metadata = {
  title: 'About',
};
export default function page({}: Props) {
  return (
    <>
        <AboutPage />
    </>
)
}