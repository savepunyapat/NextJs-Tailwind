import React from 'react'
import Homepage from './home/Home'
import { Metadata } from 'next'
type Props = {}
export const metadata : Metadata = {
  title: 'Home',
};

export default function page({}: Props) {
  return (
    <Homepage />
  )
}