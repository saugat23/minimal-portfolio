"use client";

import Container from "@/components/homepageComponents/Container";
import Link from "next/link";

export default function Page() {
  return (
    <>
    <section id="contacts">
      <Container className="border-b border-b-borderColor px-4 lg:px-8">
        <div className="py-20 lg:py-24 xl:py-28 h-auto flex flex-col justify-center space-y-7 xl:space-y-2 font-normal text-text">
          <h3 className="text-text font-bold xl:text-5xl lg:text-4xl text-3xl">Let&apos;s Chat</h3>
          <Link href="mailto:saugatbhandari8@gmail.com" className="w-full h-auto track">
            <h2 className="font-medium text-text text-[3.5rem] lg:text-[7rem] xl:text-[10.20rem] track py-4 w-full content">
              Contact Me
            </h2>
          </Link>
          <div className="w-full flex justify-between items-center">
            <h2>Saugat Bhandari. Copyright.</h2>
            <h2>
              Built by{" "}
              <Link
                href="https://www.github.com/saugat23"
                className="underline"
              >
                Saugat Bhandari
              </Link>
            </h2>
          </div>
        </div>
      </Container>
      </section>
    </>
  );
}