"use client"
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Projects from "./Projects";
import Process from "./Process";
import Contacts from "./Contacts";

export default function Home() {
    return (
        <>
        <main className="font-inter">
            <Navbar />
            <Hero />
            <About />
            <Work />
            <Projects />
            <Process />
            <Contacts />
        </main>
        </>
    )
}