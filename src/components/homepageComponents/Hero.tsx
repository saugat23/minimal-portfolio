import Image from "next/image";
import Container from "./Container";
import Coder from "@/../public/computer-engineer.png";

export default function Hero() {
    return (
        <>
        <Container className="border-b border-b-borderColor flex selection:xl:w-3/4 py-12 lg:py-16 xl:py-20 justify-center px-4 lg:px-20 items-center">
        <div className="w-full flex flex-col justify-center items-start space-y-2 font-normal text-4xl lg:text-5xl xl:text-7xl text-text">
          <h1 className="font-bold">Hi, I&apos;m Saugat 👋</h1>
          <h1>a frontend developer</h1>
          <h1>based in Nepal. &#9968;</h1>
        </div>
        <div className="hidden w-1/4 xl:flex justify-start items-center">
            <Image src={Coder} alt="Computer Programmer PNG" priority className="w-full h-full obejct-fill "/>
        </div>
        </Container>
        </>
    )
}