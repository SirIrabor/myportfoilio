import React from 'react'
import './works.scss'

export default function works() {
    return (
        <div className ="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                     
                                </div>
                                <h2>Title</h2>
                                {/* <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                </p> */}
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
