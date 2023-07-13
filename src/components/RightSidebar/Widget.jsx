import React from 'react'
import './RightSide.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blacklogo.svg'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width='18' />
                    <p>Hype or not? AI’s benefits for developers explored in the 2023 Developer Survey</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width='18' />
                    <p>Pair programing? We peek under the hood of Duet, Google's coding assistant....</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="pen" width='18' />
                    <p>Statement from SO: June 5, 2023 Moderator Action</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="pen" width='18' />
                    <p>Stack Exchange Network Outage - June 15, 2023</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={blackLogo} alt="pen" width='18' />
                    <p>Does the policy change for AI-generated content affect users who (want to)...</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={blackLogo} alt="pen" width='18' />
                    <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={blackLogo} alt="pen" width='18' />
                    <p>We are seeking functional feedback for the formatting assistant</p>
                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                <p>38</p>
                    <p>Why was this spam flag declined, yet the question marked as spam?</p>
                </div>
                <div className="right-sidebar-div-2">
                <p>20</p>
                    <p>What is the best course of action when a user has high enough rep to...</p>
                </div>
                <div className="right-sidebar-div-2">
                <p>14</p>
                    <p>Is a link to the "How to ask" help page a useful comment?</p>
                </div>
            </div>
        </div>
    )
}

export default Widget
