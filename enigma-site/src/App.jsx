import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById('root'));


//home page will include a feed of the most popular/newest stories, titles with short descriptions, centered with invisible border kinda Reddit style
//sort by most popular (in views) within certain time frames, newest
//y axis overflows
//logo also acts as home button



function AccMenu() {
    //make hover controls
    const [isShown, setIsShown] = useState(false)
    return (
        <React.Fragment>
            <button onMouseEnter={() => setIsShown(true)}
            >
                Browse by category...

                <div className={(isShown ? 'open' : 'closed')}>
                    <ul onMouseLeave={() => setIsShown(false)}>
                        <li>Dark Web</li>
                        <li>Internet Culture</li>
                        <li>Cybersecurity</li>
                        <li>Media/Entertainment</li>
                        <li>Scary</li>
                        <li>Unsolved</li>
                        <li>Fictional</li>
                    </ul>
                </div>
            </button>
        </React.Fragment>
    );
};
//category btn needs its own vertical container
function Navbar() {
    return (
        <nav className="text-blood text-2xl static w-screen ">

            <ul className='bg-zinc-900 flex flex-row justify-start space-x-7 py-4 pl-10 font-mono max-h-20'>
                <li className='drop-shadow-title text-4xl mr-10 flicker-ani-target' id="logo">
                    <a href="index.html">
                        <b><i>Enigma</i></b>
                    </a>
                </li>
                <AccMenu />
                <li><a href="">Videos</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Sign up</a></li>
                <li><a href="">Subscribe</a></li>
            </ul>

        </nav>
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
function ScrollFeed() {
    return (
        <main className='flex flex-column bg-zinc-700 max-w-4xl justify-center m-auto mt-5 overflow-y-auto rounded-3xl'>
            <section className='bg-zinc-600 w-MainScroll mt-5 rounded-3xl'>
                <div className='space-y-40 mx-5'>
                    <article>
                        <h1><b>title</b></h1>
                        <p>test</p>
                        <small>tags go here</small>
                    </article>
                    <article>
                        <h1><b>title</b></h1>
                        <p>test2</p>
                        <small>tags go here</small>
                    </article>
                    <article>
                        <h1><b>title</b></h1>
                        <p>test3</p>
                        <small>tags go here</small>
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
