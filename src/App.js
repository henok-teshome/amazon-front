import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [{ user }, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/checkout"
                        element={
                            <>
                                <Header />
                                <Checkout />
                            </>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
