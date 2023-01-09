import './App.css';
import React, { useState, useRef, useEffect } from "react";
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

function SignLog() {
    return (
        <ul className='flex flex-row space-x-10 w-3/4 justify-end pr-10'>
            <li>
                <Link to="/SignUp">Sign up</Link>
            </li>
            <li>
                <Link to="/Login">Log In</Link>
            </li>
        </ul>
    );
};
function SearchBar() {
    return (
        <li id="search_bar" className='nohover'>
            <input type="text"
                required
                size="100"
                placeholder=' Search the site...'
                className='text-xl rounded-md text-black bg-zinc-700 h-10'>
            </input>
        </li>
    );
};
//study other site navbars to see how this should be done responsively 
function Navbar() {
    //why is navigation so needlessly complicated...want my href back
    //Home will route the same as clicking the logo
    return (
        <BrowserRouter>
            <nav className="text-2xl fixed w-full z-10 topnav whitespace-nowrap">
                <ul className=' text-blue-700  flex flex-row justify-start 
                space-x-8 py-4 pl-10 font-mono topul'>

                    <li className='drop-shadow-title text-4xl mr-10 
                    flicker-ani-target nohover' >
                        <b><i>
                            <Link to="/Home">
                                Enigma
                            </Link>
                        </i></b>
                    </li>

                    <li>
                        <Link to="/About">About</Link>
                    </li>

                    <li><AccMenu /></li>

                    {/*<li>
                        <Link to="/Premium">Go Premium</Link>
                    </li>*/}
                    <li>
                        <ValidateLogin />
                    </li>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <SearchBar />
                    <li>Go Premium</li>

                    <SignLog />

                </ul>
            </nav>

            <Routes>
                <Route path="/Home"></Route>
                <Route path="/About" element={<AboutTest />}></Route>
                <Route path="/Premium" element={<PremiumTest />}></Route>*/
                <Route path="/Login" element={<LoginTest />}></Route>
                <Route path="/SignUp" element={<SignUpTest />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
//functionality to use the value of the checkbox, stored in state
function CheckBox() {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => setIsChecked(!isChecked);

    return <input type="checkbox" defaultChecked={handleCheck}></input>
};
//button flips true/false depending on the current state value
//&& operator renders the list if isVisible is true
function TagsList() {
    return (
        <ul className='text-lg'>
            <li>Dark Web
                <CheckBox />
            </li>
            <li>Internet Culture
                <CheckBox />
            </li>
            <li>Cybersecurity
                <CheckBox />
            </li>
            <li>Media/Entertainment
                <CheckBox />
            </li>
            <li>Scary
                <CheckBox />
            </li>
            <li>Conspiracies
                <CheckBox />
            </li>
            <li>Fictional
                <CheckBox />
            </li>
        </ul>
    );
};
//do this the same as the tags list rendering, 
//but use the X button to flip the sign back
function ValidateLogin() {
    //for purposes now let's pretend they are signed in
    const isSignedIn = true;

    if (isSignedIn) {
        return <Submit />

    } else {
        return window.alert("Please log in or create an account to use this feature")
    };
};

function CreateDate() {
    const date = new Date();
    return (
        date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        })
    );
};
//might be able to do this more efficiently but idk how
let hide = document.getElementsByClassName("scroll_f")
function FeedDissapear() {
    for (const item of hide) {
        item.style.display = "none"
    };
};
function RevertFeed() {
    for (const item of hide) {
        item.style.display = "block"
    };
};
//add this to the final post after submission
//issue: date only updates on refresh
function DatePost() {
    return (
        <small className='block'>
            <cite>Submitted by <b>Post author on {<CreateDate />}</b></cite>
        </small>

    );

};
//allows text boxes to expand downwards
function TextAreaExpander({ rows, cols, placeholder }) {
    const textareaRef = useRef(null);
    /*useeffect tells react to execute this after rendering 
    when side effects are allowed. Should only be last resort, if you 
    cannot use a handler*/
    useEffect(() => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    }, []);

    return (
        <textarea
            ref={textareaRef}
            style={{ height: "auto", overflow: "hidden" }}

            rows={rows}
            cols={cols}
            placeholder={placeholder}
            onInput={() => {
                const textarea = textareaRef.current;
                textarea.style.height = "auto";
                textarea.style.height = textarea.scrollHeight + "px";
            }}
        >
        </textarea>
    );
};
//todo: fix inside text not scaling
//boxes look fucky too, maybe use CSS instead of rows/cols

/*twitter style submit form*/
//First, validate that that they are logged in
//when this is pulled up, remove the feed
//use a button to pull it up, then the x exits it
//want to get rid of exit on "submit", should only exit on X btn
function Submit() {
    //inside this, allow user to pull from the list of tags when posting
    const [SubVisible, setSubVisible] = useState(false);
    const handlePostSubmission = (event) => {
        event.preventDefault()
        setSubVisible(!SubVisible)
        //toggle showing the feed, linked to the post's visible state
        SubVisible === false ? FeedDissapear() : RevertFeed()
        //Cannot attach to main feed, too much else going on there. Bad idea.
    };
    return (
        <React.Fragment>
            <button onClick={handlePostSubmission}>
                Submit
            </button>

            {SubVisible && (
                <>

                    <form className='text-black absolute z-10 mt-mtemp px-10 left-mtemp right-mtemp bg-zinc-500 '>
                        <button >
                            <small onClick={handlePostSubmission}>&#10006;</small>
                        </button>
                        <button className='ml-postbm'>Post</button>

                        <h1 className='text-xl'>
                            <TextAreaExpander
                                rows="1" cols="60"
                                placeholder="What is this post about?" />
                        </h1>

                        <p className='text-lg mt-4'>
                            <TextAreaExpander
                                rows="6" cols="70"
                                placeholder="Text" />
                        </p>
                        <DatePost />
                        <RenderList />
                    </form>
                </>

            )}
        </React.Fragment>
    );
};


function RenderList() {
    const [isVisible, setVisible] = useState(false);
    const handleSubmit = (event) => {
        //need to prevent default to avoid brower refresh 
        //browser is an idiot
        event.preventDefault()
        setVisible(!isVisible)
    };
    //flip to opposite (state) if it's been clicked
    return (
        <div>
            <button onClick={handleSubmit}>
                Tags
            </button>

            {isVisible && (
                <TagsList />
            )}
        </div>
    );
};
//this will have articles, each with a background, headline, and short description
//in column format
//default sort is by most popular that day

function ScrollFeed() {
    let article_author = "me"
    return (
        <React.Fragment>
            <div id="mini-nav-cont" className='max-w-4xl m-auto flex 
            justify-end'>
                <nav className=' text-white mt-32 whitespace-nowrap mr-4'>
                    <ul className='flex flex-row space-x-2.5'>
                        <li><small>Sort by...</small></li>
                        <li><button>Newest</button></li>
                        <li><button>Popular</button></li>
                    </ul>
                </nav>
            </div>

            <main className=' flex flex-column bg-zinc-500 max-w-4xl scroll_f
            justify-center m-auto mt-3 overflow-y-auto rounded-3xl font-mono'>
                <section className=' w-MainScroll mt-5 rounded-3xl'>
                    <div className='space-y-16 mx-5'>
                        {/*post goes in here*/}
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
