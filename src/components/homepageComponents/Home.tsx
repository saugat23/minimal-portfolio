"use client"
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";

export default function Home() {
    return (
        <>
        <main className="h-[200vh] font-inter">
            <Navbar />
            <Hero />
            <About />
            <Work />
        </main>
        </>
    )
}