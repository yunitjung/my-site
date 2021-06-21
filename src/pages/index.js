import * as React from "react"
import Layout from "../components/layout"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <div className="object-contain ml-1 lg:ml-20 lg:mr-20 pb-20">
        <h6 className="text-3xl leading-relaxed tracking-wide md:text-6xl md:leading-relaxed md:tracking-wide font-bold text-white">Hi, I'm Yuni Tjung</h6>
        <h6 className="text-3xl leading-relaxed tracking-normal md:text-6xl md:leading-relaxed md:tracking-wide font-bold text-gray-800">Full Stack Developer</h6>
        <h6 className="text-lg  leading-relaxed md:text-3xl lg:text-5xl md:leading-relaxed lg:leading-relaxed font-semibold text-gray-800"><span role="img" aria-label="pin point">📍</span> Batam, Riau Islands, Indonesia</h6>
        <p className="text-base md:text-xl text-white font-thin pt-80 md:pt-80 lg:pt-28">I'm available for freelance work. Interested in working with me ? </p>
        <p className="text-base md:text-xl text-white font-thin inline">Drop me a line at </p>
        <a href="mailto:tjungyuni@gmail.com" className="text-purple-900 hover:text-red-300 ease-300 inline font-semibold md:text-xl text-base">tjungyuni@gmail.com</a>
      </div>
    </Layout>
  )
}

export default IndexPage
