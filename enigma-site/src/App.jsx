import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {//logo also acts as home button
    const nav = (
        <nav className="text-blood text-2xl">
            <ul className='bg-zinc-900 flex flex-row justify-start space-x-7 py-4 pl-10 font-mono'>
                <li className='drop-shadow-title text-4xl mr-10 '><a href=""><b><i>Enigma</i></b></a></li>
                <li><a href="">Stories</a></li>
                <li><a href="">Videos</a></li>
                <li><a href="">About</a></li>
                <li><a href=""></a>Sign up</li>
            </ul>
        </nav>
    );
    root.render(nav);
};


export default App;
