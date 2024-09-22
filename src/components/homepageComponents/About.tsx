import Link from 'next/link'
import Container from './Container'

export default function About() {
  return (
    <>
      <section id="about">
        <Container className="flex flex-col justify-center items-start space-y-4 border-b border-b-borderColor xl:py-20 lg:py-16 py-12 px-4 xl:px-8">
          <h1 className="text-text font-bold xl:text-5xl lg:text-4xl text-3xl">
            About
          </h1>
          <p className="xl:text-2xl text-xl">
            I&apos;m a web developer with a passion for creating dynamic
            user-friendly websites using the latest tools and technologies with
            expertise in React, Next, Framer motion, Node, JS and TS, I design
            and develop online solutions that engage and delight users. Fast
            forward to day, i&apos;m currently working{' '}
            <Link
              href="https://triontechsolution.com"
              className="text-blue-700"
            >
              @Triontech Solutions.
            </Link>
          </p>
        </Container>
      </section>
    </>
  )
}
