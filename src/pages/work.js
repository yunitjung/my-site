import * as React from "react"
import Layout from '../components/layout'

const ProjectPage = () => {
    return (
        <Layout pageTitle="Project">
            <div className="flex items-center justify-center ml-20">
                <div class="flex-1 max-w-5xl">
                    <div class="grid grid-cols-2 grid-rows-3 gap-4 grid-flow-row-dense auto-rows-fr">
                        <div class="p-4 pr-6">
                            <h2 class="text-4xl font-semibold leading-10">Project 1</h2>
                            <p class="text-gray-600">Tes Project 1 Descriptions here</p>
                        </div>
                        <div class="p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2">
                            
                        </div>
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