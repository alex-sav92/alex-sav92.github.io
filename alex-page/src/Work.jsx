import React from "react";
import {useRef, useEffect, useState} from 'react';

const Work = () => {
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [toggle4, setToggle4] = useState(false)
    
    return (
        <div className="work">
            <div className='card'>
                <h2>Genesis @ Maxcode</h2>
                <p className='tech'>
                   C# ASP.NET Web API AWS Lambda AWS API Gateway AWS Cognito MongoDB SQL Server MongoDB's Device Sync
                </p>
                <p className={toggle1? 'more active' : 'more'} onClick={() => setToggle1(!toggle1)}>🡇</p>
            </div>
            <div className='card'>
                <h2>Pharmaceutical @ Softvision</h2>
                <p className='tech'>
                   ASP.NET Angular Web design Accessibility HTML Aria-attributes CSS JavaScript Screen reader
                </p>
                <p  className={toggle2? 'more active' : 'more'} onClick={() => setToggle2(!toggle2)}>🡇</p>
                {toggle2 && (
                    <p>
                       Adapting a Pharmaceutical solution for the Canada's government-required Accessibility standards. Includes working with industry-wide accessibility levels such as: A/AA/AAA, researching W3 documentation. 
                    </p>
                )}
            </div>
            <div className='card'>
                <h2>Liveforever club </h2>
                <p className='tech'>
                   ASP.NET MVC SQL Server HTML CSS JavaScript jQuery
                </p>
                <p className="more" onClick={() => setToggle3(!toggle3)}>🡇</p>
            </div>
            <div className='card'>
                <h2>Hallmark</h2>
                <p className='tech'>
                   ASP.NET MVC ASP.NET Web Forms HTML CSS JavaScript jQuery SQL Server LLbLGen
                </p>
                <p className="more" onClick={() => setToggle4(!toggle4)}>🡇</p>

            </div>
        </div>
    );
};

export default Work;