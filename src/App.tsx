import React from "react"
import { Paper } from "@mui/material";
import Navbar from "./components/Navbar";
import Router from "./components/routes";
import './App.scss';

const App = (props: any) => {
    return (
    <Paper elevation={0} className="beebs-root">
        <Navbar />
        <Router />
    </Paper>
    )
}

export default App;