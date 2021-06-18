import * as React from "react"
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <div className="object-contain ml-20 mr-10">
                <h6 className="text-3xl leading-relaxed tracking-wide font-bold inline text-gray-800">I'm full-stack developer based in Batam, Riau Islands. Most of my time, I'm working as Laravel Developer at </h6><a className="text-3xl text-white hover:text-red-300 delay-250 leading-relaxed tracking-wide font-medium inline" href="https://quarkspark.co">Quark Spark Technologies</a><h6 className="text-3xl leading-relaxed tracking-wide font-bold inline text-gray-800"> - software company based in Singapore. My works rely on PHP - Laravel, Lumen, CodeIgniter, and I also use Vue. On my free time, I take care of my hydroponic plants and do freelance web development project.</h6>
            </div>
        </Layout>
    )
}

export default AboutPage