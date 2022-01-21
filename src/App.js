import React from "react"
import HeroImg from "./components/HeroImg"
import Details from "./components/Details"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="container">
      <HeroImg />
      <Details />
      <Footer />
    </div>
  )
}