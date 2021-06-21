import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const ProjectPage = () => {
    return (
        <Layout pageTitle="Project">
            <div className="flex items-center justify-center mx-auto md:pl-20 md:pb-20 pb-10 md:pt-20">
                <div className="flex-1 max-w-5xl">
                    <div className="grid grod-cols-1 lg:grid-cols-2 grid-rows-3 gap-2 grid-flow-row-dense auto-rows-fr">  
                        <div className="relative flex">
                            <div className="project-overlay">
                            </div> 
                            <div className="project-tag-container">
                                <p className="project-title">Clickargo</p>                                    
                                <p className="project-tag">Laravel</p>                                    
                                <p className="project-tag">Lumen</p>                                    
                                <p className="project-tag">Microservice</p>                                    
                                <p className="project-tag">API</p>                                    
                            </div>
                            <div className="project ease-300">
                                <StaticImage src="../images/clickargo.png" className="object-cover project-image rounded-md shadow-lg"/>
                            </div>
                        </div>    
                        <div className="relative flex">
                            <div className="project-overlay">
                            </div> 
                            <div className="project-tag-container">
                                <p className="project-title">MML</p>                                    
                                <p className="project-tag">Laravel</p>                                  
                                <p className="project-tag">API</p>                                    
                                <p className="project-tag">E-Commerce</p>                                    
                            </div>
                            <div className="project ease-300">
                                <StaticImage src="../images/mml.png" className="object-cover project-image rounded-md shadow-lg"/>
                            </div>
                        </div>
                        <div className="relative flex">
                            <div className="project-overlay">
                            </div> 
                            <div className="project-tag-container">
                                <p className="project-title">Fajri Raya</p>                                    
                                <p className="project-tag">CodeIgniter</p>                                  
                                <p className="project-tag">Accounting System</p>                                  
                            </div>
                            <div className="project ease-300">
                                <StaticImage src="../images/fajri raya.png" className="object-cover project-image rounded-md shadow-lg"/>
                            </div>
                        </div> 
                        <div className="relative flex">
                            <div className="project-overlay">
                            </div> 
                            <div className="project-tag-container">
                                <p className="project-title">RS Sansani CRM</p>                                    
                                <p className="project-tag">CodeIgniter</p>                                  
                                <p className="project-tag">CRM</p>                                    
                                <p className="project-tag">K-Means</p>                                    
                            </div>
                            <div className="project ease-300">
                                <StaticImage src="../images/rs sansani crm.png" className="object-cover project-image rounded-md shadow-lg"/>
                            </div>
                        </div> 
                        <div className="relative flex">
                            <div className="project-overlay">
                            </div> 
                            <div className="project-tag-container">
                                <p className="project-title">Twobe Store</p>                                    
                                <p className="project-tag">CodeIgniter</p>                                  
                                <p className="project-tag">E-Commerce</p>                                    
                            </div>
                            <div className="project ease-300">
                                <StaticImage src="../images/twobestore.png" className="object-cover project-image rounded-md shadow-lg"/>
                            </div>
                        </div>      
                        <div className="relative flex">
                            <div className="project-overlay">
                            </div> 
                            <div className="project-tag-container">
                                <p className="project-title">Meoowmy</p>                                    
                                <p className="project-tag">CodeIgniter</p>                                 
                                <p className="project-tag">E-Commerce</p>                                    
                                <p className="project-tag">Clustering</p>                                    
                            </div>
                            <div className="project ease-300">
                                <StaticImage src="../images/meoowmy.png" className="object-cover project-image rounded-md shadow-lg"/>
                            </div>
                        </div>       
                        {/* <div className="p-4 pr-10">
                            <h2 className="text-4xl text-red-300 font-bold leading-10"><a href="https://muliamakmurlestari.com">Mulia Makmur Lestari</a></h2>
                            <div className="flex space-x-4">
                                <button className="text-blue-900 ring ring-blue-900 rounded-xl font-semibold p-2 mt-5">Laravel</button>
                                <button className="text-blue-900 ring ring-blue-900 rounded-xl font-semibold p-2 mt-5">API</button>
                                <button className="text-blue-900 ring ring-blue-900 rounded-xl font-semibold p-2 mt-5">E-Commerce</button>
                                <button className="text-blue-900 ring ring-blue-900 rounded-xl font-semibold p-2 mt-5">B2B</button>
                            </div>
                        </div>
                        <div className="p-4 pr-10">
                            <h2 className="text-4xl text-red-300 font-bold leading-10"><a href="https://clickargo.com">Clickargo</a></h2>
                            <div className="flex space-x-4">
                                <button className="text-blue-900 ring ring-blue-900 rounded-xl font-semibold p-2 mt-5">Laravel</button>
                                <button className="text-blue-900 ring ring-blue-900 rounded-xl font-semibold p-2 mt-5">Lumen</button>
                                <button className="text-blue-900 ring ring-blue-900 rounded-xl font-semibold p-2 mt-5">Microservice</button>
                                <button className="text-blue-900 ring ring-blue-900 rounded-xl font-semibold p-2 mt-5">API</button>
                                <button className="text-blue-900 ring ring-blue-900 rounded-xl font-semibold p-2 mt-5">Logistic</button>
                                <button className="text-blue-900 ring ring-blue-900 rounded-xl font-semibold p-2 mt-5">B2B</button>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="w-1/2 pt-20 pl-20">
                    <h5>Project 1</h5>
                </div>
                <div className="w-1/2 pt-20">
                    <div className="flex items-center justify-center px-16">
                        <div className="relative w-full max-w-lg">
                            <div className="absolute top-0 -left-2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 left-40 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute top-10 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        </div>    
                    </div>    
                </div> */}
            </div>
        </Layout>
    )
}

export default ProjectPage