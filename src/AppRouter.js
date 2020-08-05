import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Homepage} exact={true}/>
                    <Route path="/create" component={AddTask} exact={true}/>
                    <Route path="/edit/:id" component={EditTask} exact={true}/>

                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;