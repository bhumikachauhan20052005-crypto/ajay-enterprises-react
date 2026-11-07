import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Aboutus from "./components/Aboutus";
import Manufacturers from "./components/Manufacturers";
import Deals from "./components/Deals";
import RepairService from "./components/RepairService";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

import "./App.css";

function App() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <Navbar
                searchQuery={searchQuery}
                onSearch={setSearchQuery}
            />

            <Hero />

            <Solutions
                searchQuery={searchQuery}
                clearSearch={() => setSearchQuery("")}
            />

            <Aboutus />
            <Manufacturers />
            <Deals />
            <RepairService />
            <Contact />
            <Footer />
            <Chatbot />
        </>
    );
}

export default App;