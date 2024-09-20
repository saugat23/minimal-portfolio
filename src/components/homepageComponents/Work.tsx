import Container from "./Container";
import Image, { StaticImageData } from "next/image";
import TrionTech from "@/../public/triontech.jpg"
import Neutroline from "@/../public/neutroline.png";
import Link from "next/link";

type workProps = {
    link: string;
    imgSrc: StaticImageData;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
}

function WorkTab({link, imgSrc, company, position, startDate, endDate } : workProps) {
    return (
        <>
        <Link href={link} className="w-full flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between items-start lg:items-center py-6">
            <div className="flex justify-center items-center space-x-2">
                <Image src={imgSrc} alt="Work" priority className="self-start rounded-full w-12 h-12" />
                <div className="flex flex-col justify-center items-start space-y-1">
                    <p className="font-medium text-lg xl:text-xl">{company}</p>
                    <p className="font-normal text-sm xl:text-base">{position}</p>
                </div>
            </div>
            <div className="text-gray-700 self-end lg:self-center font-normal text-base xl:text-lg">{startDate} - {endDate}</div>
        </Link>
        </>
    )
}

export default function About() {
    return (
        <>
        <section id="work">
        <Container className="flex flex-col justify-center items-start space-y-4 border-b border-b-borderColor xl:py-20 lg:py-16 py-12 px-4 xl:px-8">
            <h1 className="text-text font-bold xl:text-5xl lg:text-4xl text-3xl">Work Experience</h1>
            <WorkTab link="https://triontechsolution.com" imgSrc={TrionTech} company="Trion Tech Solutions" position="Junior Frontend Developer" startDate="Feb 2024" endDate="Aug 2024" />
            <WorkTab link="http://neutroline.com" imgSrc={Neutroline} company="Neutroline Pvt. Ltd." position="Fullstack PHP Intern" startDate="Mar 2023" endDate="Sep 2023" />
        </Container>
        </section>
        </>
    )
}