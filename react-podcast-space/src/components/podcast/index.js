import React, {lazy, Suspense} from "react";
import { ReactReduxContext } from "react-redux";
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

const List = lazy(() => import('./list.js'));
const View = lazy(() => import('./view.js'));

function Podcast() {
    return (
        <div className="page-podcast">
            <ReactReduxContext.Consumer>
                {({store}) => (
                    <Router>
                        <Switch>
                            <Route path="/podcastview/:podcastid">
                                <Suspense>
                                    <View podcasts={store.getState().podcasts} />
                                </Suspense>
                            </Route>
                            <Route path="/">
                                <Suspense>
                                    <List podcasts={store.getState().podcasts} />
                                </Suspense>
                            </Route>
                        </Switch>
                    </Router>
                )}
            </ReactReduxContext.Consumer>
        </div>
    )
}

export default Podcast;