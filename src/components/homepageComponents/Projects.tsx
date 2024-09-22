'use client'

import React from 'react'
import Container from '@/components/homepageComponents/Container'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'

export default function Page() {
  return (
    <>
      <section id="projects">
        <Container className="border-b border-b-borderColor px-4 lg:px-8">
          <div className="py-20 flex flex-col justify-center space-y-2 font-normal text-text">
            <h3 className="text-text font-bold xl:text-5xl lg:text-4xl text-3xl">
              Selected Projects
            </h3>
            <p className="text-base xl:text-lg font-normal">
              Below is few of my selected projects. To view all the projects,
              head over to my
            </p>
            <Link href="https://github.com/saugat23" className="text-blue-700">
              github
            </Link>
            <div className="mt-12 w-full flex justify-between items-center">
              <div className="hidden lg:block lg:w-2/5 bg-transparent"></div>
              <ul className="w-full lg:w-3/5 flex flex-col justify-start space-y-4">
                <li className="py-12 w-full  border-b border-b-borderColor hover:border-b-text transition-colors duration-800 ease-linear">
                  <Link
                    href="https://github.com/saugat23/Laravel-fullstack-job-portal"
                    className="h-full w-full flex justify-between items-center text-base xl:text-lg font-normal text-text"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="hidden lg:inline mb-1 text-grayText text-xs">
                        01
                      </span>
                      <span>Full Stack Job Portal</span>
                    </div>
                    <div className="flex items-center justify-end space-x-3 lg:space-x-6">
                      <span>Full Stack Development, Database</span>
                      <span>
                        <MdArrowOutward className="w-7 h-7" />
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="py-12 w-full  border-b border-b-borderColor hover:border-b-text transition-colors duration-800 ease-linear">
                  <Link
                    href="https://github.com/saugat23/revus"
                    className="h-full w-full flex justify-between items-center text-base xl:text-lg font-normal text-text"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="hidden lg:inline mb-1 text-grayText text-xs">
                        02
                      </span>
                      <span>Car Booking</span>
                    </div>
                    <div className="flex items-center justify-end space-x-3 lg:space-x-6">
                      <span>Frontend Development, NextJS</span>
                      <span>
                        <MdArrowOutward className="w-7 h-7" />
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="py-12 w-full  border-b border-b-borderColor hover:border-b-text transition-colors duration-800 ease-linear">
                  <Link
                    href="https://github.com/saugat23/nextSound"
                    className="h-full w-full flex justify-between items-center text-base xl:text-lg font-normal text-text"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="hidden lg:inline mb-1 text-grayText text-xs">
                        03
                      </span>
                      <span>NextSound</span>
                    </div>
                    <div className="flex items-center justify-end space-x-3 lg:space-x-6">
                      <span>FullStack Development, NextJS, PostgreSQL</span>
                      <span>
                        <MdArrowOutward className="w-7 h-7" />
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
