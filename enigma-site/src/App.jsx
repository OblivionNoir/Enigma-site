import './App.css';
import React, { useState } from "react";
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AboutTest } from './About'
import { SignUpTest } from './SignUp';
//import { PremiumTest } from './Premium';
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

function Navbar() {
    //why is navigation so needlessly complicated...want my href back
    return (

        <BrowserRouter>
            <nav className="text-2xl fixed w-full z-10 topnav whitespace-nowrap">
                <ul className=' text-blue-700  flex flex-row justify-start 
                space-x-10 py-4 pl-10 font-mono topul'>

                    <li className='drop-shadow-title text-4xl mr-10 
                    flicker-ani-target' id="logo">
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

                    {/*<li>
                        <Link to="/Premium">Go Premium</Link>
                    </li>*/}
                    <li>
                        <ValidateLogin />
                    </li>


                    <SignLog />

                </ul>
            </nav>

            <Routes>
                <Route path="/App"></Route>
                <Route path="/About" element={<AboutTest />}></Route>
                {/*<Route path="/Premium" element={<PremiumTest />}></Route>*/}
                <Route path="/Login" element={<LoginTest />}></Route>
                <Route path="/SignUp" element={<SignUpTest />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
/*var tags = ["Dark Web",
    "Internet Culture",
    "Cybersecurity",
    "Media/Entertainment",
    "Scary", "Conspiracies",
    "Fictional"
];*/
//show a checkmark when the tag is clicked
function Tag({ name, isSelected }) {
    return (
        <li className='text-lg'>{name}</li>
    );
};
//button flips true/false depending on the current state value
//&& operator renders the list if isVisible is true
function TagsList() {
    return (
        <ul>
            <Tag
                isSelected={true}
                name='Dark Web'
            />
            <Tag
                isSelected={true}
                name='Internet Culture'
            />
            <Tag
                isSelected={true}
                name='Cybersecurity'
            />
            <Tag
                isSelected={true}
                name='Media/Entertainment'
            />
            <Tag
                isSelected={true}
                name='Scary'
            />
            <Tag
                isSelected={true}
                name='Conspiracies'
            />
            <Tag
                isSelected={true}
                name='Fictional'
            />
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
/*twitter style submit form*/
//First, validate that that they are logged in
//when this is pulled up, remove the feed
function PostDate() {
    const filter_date = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    return (
        //this will need to be updated with back end retrieving the time zone
        new Date().toLocaleDateString('en-US', filter_date)
    );
};
//use a button to pull it up, then the x exits it
//want to get rid of exit on "submit", should only exit on X btn
function Submit() {
    //inside this, allow user to pull from the list of tags when posting
    const [SubVisible, setSubVisible] = useState(false);
    const handlePostSubmission = (event) => {
        event.preventDefault()
        setSubVisible(!SubVisible)

        //YOU ARE HERE 

        //will need to loop through elements with "scroll_f" class, display 
        //none them, then revert it when the user goes back or the post is made
    };
    return (
        <React.Fragment>
            <button onClick={handlePostSubmission}>
                Submit
            </button>

            {SubVisible && (
                <form className='text-black absolute z-10 mt-mtemp px-10 left-mtemp right-mtemp bg-zinc-500'>
                    <button >
                        <small onClick={handlePostSubmission}>&#10006;</small>
                    </button>
                    <h1 className='text-2xl'>Title here</h1>

                    <p className='text-xl h-32'>Text here</p>

                    <small className='block'>
                        <cite>Submitted by <b>Post author on {<PostDate />}</b></cite>
                    </small>
                    <RenderList />
                </form>
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

function ScrollFeed() {
    let article_author = "me"
    return (
        <div>
            <div id="mini-nav-cont" className='max-w-4xl m-auto flex 
            justify-end scroll_f'>
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

                    </div>
                </section>
            </main>
        </div>
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
