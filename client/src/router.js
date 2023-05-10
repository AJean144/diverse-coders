import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './screens/Home';
import CreateJobPost from './screens/CreateJobPost';
import ShowJobPost from './screens/ShowJobPost';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/new-job-post" component={CreateJobPost} />
                <Route path="/job_posts/:id" component={ShowJobPost} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;