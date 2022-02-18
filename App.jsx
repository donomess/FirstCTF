import React from "react";
import { flagChecker, getInput } from "./flagChecker";


const App = () => {
    return(
        <div className ="App">
            <header>
                <h1>please get the flag thanks</h1>
            </header>
            <body>
                <div>
                    <p>i am bad at this ok</p>
                    <form id="flag" onSubmit={flagChecker}>
                        <input type="text" id="userInput"/>
                        <input type="submit" id={getInput}/>
                    </form>
                </div>
            </body>
        </div>
    );
}