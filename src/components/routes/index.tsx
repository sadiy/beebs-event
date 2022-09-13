import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../Home";
import News from "../News";

const Router = (props:any) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="teams">
                        <Route path=":teamId" element={<News />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;