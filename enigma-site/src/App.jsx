import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById('root'));

//home page will include a feed of the most popular/newest stories, titles with short descriptions, centered with invisible border kinda Reddit style
//sort by most popular (in views) within certain time frames, newest
//y axis overflows
//logo also acts as home button


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    //need a way to make the shadow flicker on/off 
    handleShadow = () => {
        return (
            <li className='drop-shadow-title text-4xl mr-10'><a href=""><b><i>Enigma</i></b></a></li>
        );
    };
    //starts off hidden
    createCategoryChildren() {
        return (
            <React.Fragment>
                <div className='acc_child'>
                    <a href="">Dark Web</a>
                </div>
                <div className='acc_child'>
                    <a href="">Internet Culture</a>
                </div>
                <div className='acc_child'>
                    <a href="">Cybersecurity</a>
                </div>
                <div className='acc_child'>
                    <a href="">Media/Entertainment</a>
                </div>
                <div className='acc_child'>
                    <a href="">Scary</a>
                </div>
                <div className='acc_child'>
                    <a href="">Unsolved</a>
                </div>
                <div className='acc_child'>
                    <a href="">Fictional</a>
                </div>
            </React.Fragment>
        );
    };
    removeCategoryChildren() {
        let acc_children = document.getElementsByClassName
        for (let i = 0; i < acc_children.length; i++) {
            acc_children[i].style.display = "none";
        };
    };
    //determines what to do when button is clicked, render or remove
    controlTagMenu() {

    };

    render() {
        return (
            <nav className="text-blood text-2xl static w-screen">
                <ul className='bg-zinc-900 flex flex-row justify-start space-x-7 py-4 pl-10 font-mono'>
                    <li><this.handleShadow /></li>
                    <li><button id="acc_menu" onClick={this.controlTagMenu}>Browse by category...</button></li>
                    <li><a href="">Videos</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Sign up</a></li>
                    <li><a href="">Subscribe</a></li>
                </ul>
            </nav>

        );
    };
};


class MiniNav extends React.Component {
    render() {
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
};
//this will have articles, each with a background, headline, and short description
//in column format
class ScrollFeed extends React.Component {
    render() {
        return (
            <main className='flex flex-column bg-zinc-700 max-w-4xl justify-center m-auto mt-5 overflow-y-auto rounded-xl'>
                <section className='bg-zinc-600 w-MainScroll mt-5 rounded-xl'>
                    <div className='space-y-40 mx-5'>
                        <article>
                            <caption><b>title</b></caption>
                            <p>test</p>
                        </article>
                        <article>
                            <caption><b>title</b></caption>
                            <p>test2</p>
                        </article>
                        <article>
                            <caption><b>title</b></caption>
                            <p>test3</p>
                        </article>
                    </div>
                </section>
            </main>
        );
    };
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
