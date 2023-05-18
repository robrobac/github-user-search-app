import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import ShowUser from "./components/ShowUser";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.scss';


const API_URL = "https://api.github.com/users/";

function App() {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);

    // Get Username from Github
    useEffect(() => {
        if (username) {
            fetch(`${API_URL}${username}`)
                .then((result) => result.json())
                .then(
                    (result) => {
                        if (result.message === "Not Found") {
                            setUser(result);
                            console.log("No user found:", result)
                        } else {
                            setUser(result);
                            console.log("User:", result)
                        }

                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    }, [username]);

    // Get Username Repositories from Github
    useEffect(() => {
        if (username) {
            fetch(`${API_URL}${username}/repos`)
                .then((result) => result.json())
                .then(
                    (result) => {
                        if (result.message === "Not Found") {
                            setRepos([]);
                            console.log("No Repos found:", result)
                        } else {
                            setRepos(result);
                            console.log("Repos:", result)
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    }, [username]);


    // Dinamical App component height
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    const height100 = {
        height: viewportHeight,
    };

    useEffect(() => {
        const handleResize = () => {
            setViewportHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // End of Dinamical App component height


    // Form submit
    const searchUsername = (user) => {
        if (user.trim().length === 0) {
            // No empty names and more than one space
            return
        }
        setUsername(user)
        console.log("submited:", user)
    }

    return (
        <div className="App" style={height100}>
            <Header />
            <SearchForm onSubmit={searchUsername} />
            <main>
                <ShowUser user={user} repos={repos} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
