import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById('root'));

//home page will include a feed of the most popular/newest stories, titles with short descriptions, centered with invisible border kinda Reddit style
//sort by most popular (in views) within certain time frames, newest
//y axis overflows
//logo also acts as home button


class BuildNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { shadow: true }//for turning the logo shadow on and off for flicker effect
        this.handleShadow = this.handleShadow.bind(this);
    };
    handleShadow = () => {
        if (this.state.shadow) {//if it's true, switch to the unshadowed version and update state
            this.setState({ shadow: false })
            return (
                <li className='text-4xl mr-10'><a href=""><b><i>Enigma</i></b></a></li>
            );
        };
        this.setState({ shadow: true })
        return (
            <li className='drop-shadow-title text-4xl mr-10'><a href=""><b><i>Enigma</i></b></a></li>
        );
    };
    render() {
        return (
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

//works, but doesn't animate yet
//to do the animation, just have it swap between two different classes, one with the shadow and one without on a random timer

function App() {
    return (
        <BuildNav />
    );

};

root.render(<App />);
export default App;
