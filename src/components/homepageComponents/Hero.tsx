import Container from './Container'

export default function Hero() {
  return (
    <>
      <Container className="border-b border-b-borderColor py-12 lg:py-16 xl:py-20">
        <div className="w-full flex flex-col justify-center items-start space-y-2 font-normal px-4 lg:px-0 leading-[1] text-[4rem] lg:text-[6rem] xl:text-h1 text-text">
          <h1 className="font-bold">Hi, I&apos;m Saugat</h1>
          <h1>a frontend developer</h1>
          <h1>based in Nepal. &#9968;</h1>
        </div>
      </Container>
    </>
  )
}
