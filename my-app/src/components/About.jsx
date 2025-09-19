import {Outlet} from 'react-router-dom'
import {NavLink} from "react-router";
import hi from '../assets/hiHand.png';
import click from '../assets/click.png';

export default function About(){
    return (
        <div className="about-container">
            <div className="about-text-segm-about">
            <h1 className="about-h1" >Hi there!</h1>
            <p className="about-p" >
            <span className="about-span">What is it?</span>
                <br/>
            Here you can see my test project. I learning now routing, so have a good time and enjoy it!
                <br/>
            Please, test my app!
            </p>
                <img alt="Hi" src={hi} className="about-img img-hi" />
            </div>
            <div className="about-text-segm-instr">
            <h1 className="about-h1-instr" >How to test:</h1>
            <p className="about-p-instr" >
                <span className="about-span-instr" >In the URL</span> you see segments.
                <br/>
                <span className="about-span-instr" >Click</span> on any button and watch how segment changes.
            </p>
                <img alt="click" src={click} className="about-img img-click " />
            </div>
            <div className="about-button-div">
            <NavLink to={'/'}><button className="about-button home-button" >Home</button></NavLink>
                <NavLink to='/auth/login'><button className="about-button">Login</button></NavLink>
                <NavLink to='/auth/signup'><button className="about-button">Register</button></NavLink>
            </div>
        <Outlet />
        </div>
    )
}