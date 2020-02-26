import React, {lazy, Suspense} from "react";
import ContextPodcasts from '../../data/contextPodcasts.js';
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
            <ContextPodcasts.Consumer>
                {(context) => (
                    <Router>
                        <Switch>
                            <Route path="/podcastview/:podcastid">
                                <Suspense>
                                    <View podcasts={context.state.podcasts} />
                                </Suspense>
                            </Route>
                            <Route path="/">
                                <Suspense>
                                    <List podcasts={context.state.podcasts} />
                                </Suspense>
                            </Route>
                        </Switch>
                    </Router>
                )}
            </ContextPodcasts.Consumer>
        </div>
    )
}

export default Podcast;