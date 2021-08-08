import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
    const [logIn, setLogIn] = useState({username: "", password: ""});
    const [XCSRFToken, setXCSRFToken] = useState({});
    console.log(XCSRFToken)
    const handleChangeLogIn = (e) => {
        const {name, value} = e.target
        setLogIn({...logIn, [name]: value})
    }
    const handleOnClick = async () => {

        try {
            const tok = await axios({
                    method: "POST",
                    url: "https://agile-garden-50413.herokuapp.com/api/token/login/",
                    headers: {
                        "X-CSRFToken": "GoSFgMx2Ke0sZerQhShybL8c5E0MX4FIdtvr1U1VrFAqFjcQBg1tnTLAt0VscWPt",
                        "Content-Type": "application/json"
                    },
                    data: {
                        ...logIn
                    }
                }
            )
            setXCSRFToken(tok)
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <div className="App">
            <label>username</label>
            <input value={String(logIn.username)} type="text" name="username" onChange={handleChangeLogIn}/>
            <br/>
            <label>password</label>
            <input value={String(logIn.password)} type="password" name="password" onChange={handleChangeLogIn}/>
            <br/>
            <button onClick={handleOnClick}>submit</button>
        </div>
    );
}

export default App;
