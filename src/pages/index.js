import * as React from "react"
import Layout from "../components/layout"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <div className="object-contain ml-20 mr-20">
        <h6 className="text-6xl leading-relaxed tracking-wide font-bold text-white">Hi, I'm Yuni Tjung</h6>
        <h6 className="text-6xl leading-relaxed tracking-wide font-bold text-gray-800">Full Stack Developer</h6>
        <h6 className="text-5xl leading-relaxed font-semibold text-gray-800"><span role="img" aria-label="pin point">📍</span> Batam, Riau Islands, Indonesia</h6>
        <p className="text-xl text-white font-semibold pt-52">I'm available for freelance work. Interested in working with me ? </p>
        <p className="text-xl text-white font-semibold inline">Drop me a line at </p>
        <a href="mailto:tjungyuni@gmail.com" className="text-purple-900 hover:text-red-300 inline font-bold text-xl">tjungyuni@gmail.com</a>
      </div>
    </Layout>
  )
}

export default IndexPage
