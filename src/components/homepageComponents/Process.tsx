"use client";

import React from "react";
import Container from "./Container";

export default function Page() {
  return (
    <>
      <Container className="border-b border-b-borderColor px-4 lg:px-8">
        <div className="py-16 lg:py-20 flex flex-col justify-center space-y-2 font-normal text-text">
          <h3 className="text-text font-bold xl:text-5xl lg:text-4xl text-3xl">Process</h3>
          <div className="mt-12 w-full flex justify-between items-center">
            <div className="hidden lg:block lg:w-2/5 bg-transparent"></div>
            <ul className="w-full lg:w-3/5 flex flex-col justify-start space-y-4">
              <li className="py-6 lg:py-12 w-full flex lg:flex-row flex-col space-y-3 lg:space-y-0 justify-between items-start text-base xl:text-lg font-normal text-text">
                <p className="">Creative Approach</p>
                <p className="w-full lg:w-3/5 text-grayText">
                  I dive deep into understanding the project requirements and
                  user needs. This involves thorough research and engaging with
                  clients to grasp the core objectives and challenges.
                </p>
              </li>
              <li className="py-6 lg:py-12 w-full flex lg:flex-row flex-col space-y-3 lg:space-y-0 justify-between items-start text-base xl:text-lg font-normal text-text">
                <p className="">Development Strategy</p>
                <p className="w-full lg:w-3/5 text-grayText">
                  I explore multiple frontend frameworks and libraries, build
                  interactive prototypes, and refine the user experience to
                  ensure a seamless interface before finalizing the code.
                </p>
              </li>
              <li className="py-6 lg:py-12 w-full flex lg:flex-row flex-col space-y-3 lg:space-y-0 justify-between items-start text-base xl:text-lg font-normal text-text">
                <p className="">Production & Implementation</p>
                <p className="w-full lg:w-3/5 text-grayText">
                  I work closely with backend developers to integrate the
                  frontend with the server - side logic.Rigorous testing and
                  debugging are conducted to ensure the final product is robust
                  and user - friendly.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}