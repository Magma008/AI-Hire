import React from 'react'
import BorderedButton from '../../Components/Button/Bordered'

const AboutUs = () => {
    return (
        <div id='about'>
            <div className="main-container">
                <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4">
                    <div className="p-2 flex flex-col gap-3 md:p-4">
                        <p className="sm:text-lg md:text-xl dark:text-white">AI technology is widely used throughout industry, government, and science. Some high-profile applications include advanced web search engines (e.g., Google Search); recommendation systems (used by YouTube, Amazon, and Netflix); interacting via human speech (e.g., Google Assistant, Siri, and Alexa); autonomous vehicles (e.g., Waymo); generative and creative tools (e.g., ChatGPT and AI art); and superhuman play and analysis in strategy games (e.g., chess and Go).</p>
                        <div className='flex justify-end'>
                            <a href="https://en.wikipedia.org/wiki/Artificial_intelligence">
                                <BorderedButton text="See more" extraClass="rounded-md sm:py-[6px] px-8 text-lg" />
                            </a>
                        </div>
                    </div>
                    <div className="p-2 md:p-4">
                        <img src="/content.jpg" alt="img" className="rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs