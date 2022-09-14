import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../Home";
import News from "../News";

const Router = (props: any) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="news">
                        <Route path=":newsId" element={<News />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;