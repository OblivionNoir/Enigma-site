import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link, Route, Routes } from 'react-router-dom';
import { AboutTest } from './About'
import { SubmitTest } from './Submit';
import { SignUpTest } from './SignUp';
import { PremiumTest } from './Premium';




const root = ReactDOM.createRoot(document.getElementById('root'));

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
    return (
        <React.Fragment>
            <button onMouseEnter={() => setIsShown(true)}>
                Browse by category...

                <div className={(isShown ? 'open' : 'closed')}>
                    <ul onMouseLeave={() => setIsShown(false)}>
                        <li>
                            <a href="">Dark Web</a>
                        </li>
                        <li>
                            <a href="">Internet Culture</a>
                        </li>
                        <li>
                            <a href="">Cybersecurity</a>
                        </li>
                        <li>
                            <a href="">Media/Entertainment</a>
                        </li>
                        <li>
                            <a href="">Scary</a>
                        </li>
                        <li>
                            <a href="">Conspiracies</a>
                        </li>
                        <li id="last">Fictional<a href="">
                        </a>
                        </li>
                    </ul>
                </div>
            </button>
        </React.Fragment>
    );
};


//this needs to stay put as you scroll down!
//reformat all the hrefs to do links in the React way
function Navbar() {
    //why is navigation so needlessly complicated...want my href back
    //accmenu - leave it alone
    return (
        <React.Fragment>
            <nav className=" text-2xl static w-screen">
                <ul className='bg-zinc-900 text-blood flex flex-row justify-start space-x-7 py-4 pl-10 font-mono max-h-20'>

                    <li className='drop-shadow-title text-4xl mr-10 flicker-ani-target' id="logo">
                        <b><i>
                            <Link to="/">
                                Enigma
                            </Link>
                        </i></b>
                    </li>

                    <li>
                        <Link to="/About">About</Link>
                    </li>

                    <li><AccMenu /></li>

                    <li>
                        <Link to="/Submit">Submit</Link>
                    </li>

                    <li>
                        <Link to="/SignUp">Sign up</Link>
                    </li>

                    <li>
                        <Link to="/Premium">Go Premium</Link>
                    </li>

                </ul>
            </nav>
            <Routes>
                <Route path="/About" element={<AboutTest />}></Route>
                <Route path="/Submit" element={<SubmitTest />}></Route>
                <Route path="/SignUp" element={<SignUpTest />}></Route>
                <Route path="/Premium" element={<PremiumTest />}></Route>
            </Routes>
        </React.Fragment>
    );
};

function MiniNav() {
    return (//toss in some SVG
        <nav className=' text-white static mt-16 flex justify-end max-w-4xl m-auto'>
            <ul className='flex flex-row space-x-2.5'>
                <li><small>Sort by...</small></li>
                <li><button>Newest</button></li>
                <li><button>Popular</button></li>
            </ul>
        </nav>
    );
};
//this will have articles, each with a background, headline, and short description
//in column format
//default sort is by most popular that day

//todo: don't hardcode the tags, have it pull from the list when people input so you can't just make random shit up
function ScrollFeed() {
    let article_author = "me"
    return (
        <main className='flex flex-column bg-zinc-700 max-w-4xl justify-center m-auto mt-5 overflow-y-auto rounded-3xl'>
            <section className='bg-zinc-600 w-MainScroll mt-5 rounded-3xl'>
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
                    <article>
                        <h1><b>Red Rooms: New Evidence Found?</b></h1>
                        <br></br>
                        <p>A group of individuals on Reddit claim to have discovered what could be proof of the existence of
                            the infamous "red rooms", a place hidden in the dark web where murders are broadcasted live.
                        </p>
                        <br></br>
                        <small>tags: scary, internet culture, dark web</small>
                        <br></br>
                        <small><cite>Submitted by <b>{article_author}</b></cite></small>
                    </article>
                    <article>
                        <h1><b>title</b></h1>
                        <p>test3</p>
                        <small>tags go here</small>
                        <br></br>
                        <small><cite>Submitted by <b>{article_author}</b></cite></small>
                    </article>
                </div>
            </section>
        </main>
    );
};
//do the main rendering here
class MainSite extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MiniNav />
                <ScrollFeed />
            </React.Fragment>
        );
    };
};

root.render(<MainSite />);
export default MainSite;
