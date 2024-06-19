import React from 'react'
import Animation from "../../assets/Animation.json"
import Lottie from 'lottie-react'


const MainPage = () => {
    return (
        <div>
            <div className="main-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                    <div className="flex justify-center">
                        <Lottie className='md:w-[80%] overflow-hidden ' animationData={Animation} />
                    </div>
                    <div>
                        <p className="text-base sm:text-xl md:text-2xl dark:text-white">Artificial intelligence (AI), in its broadest sense, is intelligence exhibited by machines, particularly computer systems. It is a field of research in computer science that develops and studies methods and software that enable machines to perceive their environment and uses learning and intelligence to take actions that maximize their chances of achieving defined goals. Such machines may be called AIs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage