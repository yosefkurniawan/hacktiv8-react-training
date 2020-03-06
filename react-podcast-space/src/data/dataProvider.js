import React from "react";
import ContextPodcasts from "./contextPodcasts.js";

class DataProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            podcasts: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch('https://json-server-heroku-zjqcjtotyv.now.sh/podcasts')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({
                    podcasts: data,
                    loading: false
                })
            });
    }

    getPodcastById = (id) => {
        const podcast = this.state.podcasts.find(x => x.id === parseInt(id));
        return podcast;
    }

    render() {
        return (
            <>
            { this.state.loading ? 
                (
                    <div className="spinner app-loader">Loading apps...</div>
                ) : (
                    <ContextPodcasts.Provider value={{
                        state: this.state,
                        getPodcastById: this.getPodcastById
                    }}>
                        {this.props.children}
                    </ContextPodcasts.Provider>
                )
            }
            </>
        )
    }
}

export default DataProvider;