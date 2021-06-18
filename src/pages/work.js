import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const ProjectPage = () => {
    return (
        <Layout pageTitle="Project">
            <div className="flex items-center justify-center pl-20 pb-20 pt-20">
                <div className="flex-1 max-w-5xl">
                    <div className="grid grid-cols-2 grid-rows-3 gap-2 grid-flow-row-dense auto-rows-fr">  
                        <div className="relative">
                            <div className="absolute inset-0 rounded-md bg-red-400 opacity-100">
                            </div> 
                            <div className="absolute bottom-5 left-5 space-x-2">
                                <p className="text-lg text-white font-bold tracking-wide">Clickargo</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">Laravel</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">Lumen</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">Microservice</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">API</p>                                    
                            </div>
                            <div className="relative hover:opacity-10">
                                <StaticImage src="../images/clickargo.png" className="inset-0 rounded-md shadow-lg"/>
                            </div>
                        </div>    
                        <div className="relative">
                            <div className="absolute inset-0 rounded-md bg-red-400 opacity-100">
                            </div> 
                            <div className="absolute bottom-5 left-5 space-x-2">
                                <p className="text-lg text-white font-bold tracking-wide">MML</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">Laravel</p>                                  
                                <p className="text-md text-white font-bold tracking-wide inline">API</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">E-Commerce</p>                                    
                            </div>
                            <div className="relative hover:opacity-10">
                                <StaticImage src="../images/mml.png" className="inset-0 rounded-md shadow-lg"/>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 rounded-md bg-red-400 opacity-100">
                            </div> 
                            <div className="absolute bottom-5 left-5 space-x-2">
                                <p className="text-lg text-white font-bold tracking-wide">Fajri Raya</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">CodeIgniter</p>                                  
                                <p className="text-md text-white font-bold tracking-wide inline">Accounting System</p>                                  
                            </div>
                            <div className="relative hover:opacity-10">
                                <StaticImage src="../images/fajri raya.png" className="inset-0 rounded-md shadow-lg"/>
                            </div>
                        </div> 
                        <div className="relative">
                            <div className="absolute inset-0 rounded-md bg-red-400 opacity-100">
                            </div> 
                            <div className="absolute bottom-5 left-5 space-x-2">
                                <p className="text-lg text-white font-bold tracking-wide">RS Sansani CRM</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">CodeIgniter</p>                                  
                                <p className="text-md text-white font-bold tracking-wide inline">CRM</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">K-Means</p>                                    
                            </div>
                            <div className="relative hover:opacity-10">
                                <StaticImage src="../images/rs sansani crm.png" className="inset-0 rounded-md shadow-lg"/>
                            </div>
                        </div> 
                        <div className="relative">
                            <div className="absolute inset-0 rounded-md bg-red-400 opacity-100">
                            </div> 
                            <div className="absolute bottom-5 left-5 space-x-2">
                                <p className="text-lg text-white font-bold tracking-wide">Twobe Store</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">CodeIgniter</p>                                  
                                <p className="text-md text-white font-bold tracking-wide inline">E-Commerce</p>                                    
                            </div>
                            <div className="relative hover:opacity-10">
                                <StaticImage src="../images/twobestore.png" className="inset-0 rounded-md shadow-lg"/>
                            </div>
                        </div>      
                        <div className="relative">
                            <div className="absolute inset-0 rounded-md bg-red-400 opacity-100">
                            </div> 
                            <div className="absolute bottom-5 left-5 space-x-2">
                                <p className="text-lg text-white font-bold tracking-wide">Meoowmy</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">CodeIgniter</p>                                 
                                <p className="text-md text-white font-bold tracking-wide inline">E-Commerce</p>                                    
                                <p className="text-md text-white font-bold tracking-wide inline">Clustering</p>                                    
                            </div>
                            <div className="relative hover:opacity-10">
                                <StaticImage src="../images/meoowmy.png" className="inset-0 rounded-md shadow-lg"/>
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