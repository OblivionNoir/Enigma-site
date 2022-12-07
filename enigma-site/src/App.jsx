import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById('root'));

//home page will include a feed of the most popular/newest stories, titles with short descriptions, centered with invisible border kinda Reddit style
//sort by most popular (in views) within certain time frames, newest
//y axis overflows
//logo also acts as home button

//too many state updates, need to figure out how to fix that but keep the animation
//may not even need to use states, just do it the traditional JS way(but there's no actual html element?)
class BuildNav extends React.Component {
    constructor(props) {
        super(props)
        this.handleShadow = this.handleShadow.bind(this);
    };

    handleShadow = () => {
        return (
            <li className='drop-shadow-title text-4xl mr-10'><a href=""><b><i>Enigma</i></b></a></li>
        );
    };

    render() {
        return (//needs an interval right where the handleShadow call is, I think, but for some reason that makes these random numbers?????
            <nav className="text-blood text-2xl fixed w-screen">
                <ul className='bg-zinc-900 flex flex-row justify-start space-x-7 py-4 pl-10 font-mono'>
                    <this.handleShadow />
                    <li><a href="">Tags</a></li>
                    <li><a href="">Videos</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Sign up</a></li>
                </ul>
            </nav>
        );

    };
};
class MainBody extends React.Component {



}

function App() {
    return (
        <BuildNav />
    );

};

root.render(<App />);
export default App;
