'use client'

import React from 'react'
import Container from './Container'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Container>
        <nav className="w-full flex justify-between items-end h-12 text-base px-2">
          <Link href="/" className="text-text font-medium">
            Saugat Bhandari
          </Link>
          <div className="font-medium">Developer _____</div>
          <ul className="hidden lg:flex items-center space-x-8 font-medium text-text">
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  )
}
