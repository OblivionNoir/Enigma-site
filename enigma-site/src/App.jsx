import './App.css';
import React, { useState } from "react";
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AboutTest } from './About'
import { SignUpTest } from './SignUp';
import { PremiumTest } from './Premium';
import { LoginTest } from './Login';



//home page will include a feed of the most popular/newest stories, titles with short descriptions, centered with invisible border kinda Reddit style
//sort by most popular (in views) within certain time frames, newest
//y axis overflows
//logo also acts as home button
var tags = ["Dark Web",
    "Internet Culture",
    "Cybersecurity",
    "Media/Entertainment",
    "Scary", "Conspiracies",
    "Fictional"]
function AccMenu() {
    //make hover controls
    const [isShown, setIsShown] = useState(false)
    //the tags don't need their own pages, it will just update the main feed
    return (
        <React.Fragment>
            <button onMouseEnter={() => setIsShown(true)}>
                Browse by category

                <div className={(isShown ? 'open' : 'closed')}>
                    <ul onMouseLeave={() => setIsShown(false)}>
                        <li>Dark Web</li>
                        <li>Internet Culture</li>
                        <li>Cybersecurity</li>
                        <li>Media/Entertainment</li>
                        <li>Scary</li>
                        <li>Conspiracies</li>
                        <li id="last">Fictional</li>
                    </ul>
                </div>
            </button>
        </React.Fragment>
    );
};


//this needs to stay put as you scroll down!
function Navbar() {
    //why is navigation so needlessly complicated...want my href back
    //accmenu - leave it alone
    return (
        <BrowserRouter>
            <nav className="text-2xl fixed w-screen z-10 topnav">
                <ul className=' text-blue-700 flex flex-row justify-start space-x-10 py-4 pl-10 font-mono whitespace-nowrap topul'>

                    <li className='drop-shadow-title text-4xl mr-10 flicker-ani-target ' id="logo">
                        <b><i>
                            <Link to="/App">
                                Enigma
                            </Link>
                        </i></b>
                    </li>

                    <li>
                        <Link to="/About">About</Link>
                    </li>

                    <li><AccMenu /></li>

                    <li>
                        <Link to="/Premium">Go Premium</Link>
                    </li>
                    <SignLog />

                </ul>
            </nav>
            <Routes>
                <Route path="/App"></Route>
                <Route path="/About" element={<AboutTest />}></Route>
                <Route path="/Premium" element={<PremiumTest />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
/*seperate nav for these 2, they have complex functions and it doesn't 
seem possible to align them to the right in the same list while maintaining responsiveness.*/

function Submit() {
    //for purposes now let's pretend they do have an account
    //this can work similarly to the hover drop down
    //inside this, allow user to pull from the list of tags when posting
    const has_account = true;
    const [isVisible, setisVisible] = useState(false);
    if (has_account) {
        <form className={(isVisible ? 'formOpen' : 'formClose')}>



        </form>


    };
};

function SignLog() {
    return (
        <React.Fragment>
            <nav className="text-2xl z-10 max-h-10 pl-SignLogPad">
                <ul className='flex flex-row space-x-7'>
                    <li>
                        <Submit />
                    </li>
                    <li>
                        <Link to="/SignUp">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/Login">Log In</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/Login" element={<LoginTest />}></Route>
                <Route path="/SignUp" element={<SignUpTest />}></Route>
            </Routes>
        </React.Fragment>
    );
};

//this will have articles, each with a background, headline, and short description
//in column format
//default sort is by most popular that day

//todo: don't hardcode the tags, have it pull from the list when people input so you can't just make random shit up
function HandleFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/src/back/form/submit-form', {
        method: 'POST',
        body: formData
    })
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
        });
};
function HandleFormData() {
    fetch('./src/back/form/get-data')
        .then((response) => response.json())
        .then((data) => {
            //display the data
        });
};
//now do the same thing to fix the main nav's responsiveness
function ScrollFeed() {
    let article_author = "me"
    return (
        <React.Fragment>
            <div id="mini-nav-cont" className='max-w-4xl m-auto flex justify-end'>
                <nav className=' text-white mt-32 whitespace-nowrap mr-4'>
                    <ul className='flex flex-row space-x-2.5'>
                        <li><small>Sort by...</small></li>
                        <li><button>Newest</button></li>
                        <li><button>Popular</button></li>
                    </ul>
                </nav>
            </div>

            <main className=' flex flex-column bg-zinc-500 max-w-4xl justify-center m-auto mt-3 overflow-y-auto rounded-3xl  font-mono'>
                <section className=' w-MainScroll mt-5 rounded-3xl'>
                    <div className='space-y-16 mx-5'>
                        <article>
                            <h1><b>Are they Training an AI Model on You?</b></h1>
                            <br></br>
                            <p>Is it true that scientists are secretly training an AI model on people without their consent?
                                Some individuals claim they are being used as data sources and notice strange things happening in their lives. </p>
                            <br></br>
                            <small>tags: conspiracy, cybersecurity</small>
                            <br></br>
                            <small><cite>Submitted by <b>{article_author}</b></cite></small>
                        </article>
                    </div>
                </section>
            </main>

        </React.Fragment>
    );
};
//do the main rendering here
class MainSite extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <ScrollFeed />
            </React.Fragment>
        );
    };
};

//root.render(<MainSite />);
export default MainSite;
