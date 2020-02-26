import React, {lazy, Suspense} from "react";
/** @jsx jsx  */
import {jsx, css} from '@emotion/core';

const SearchForm = lazy(() => import('../searchform'))
const Item = lazy(() => import('./item.js'))

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }
    
    onKeywordChange = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }

    render () {
        const result = []
        this.props.podcasts.forEach((podcast) => {
            if(podcast.title.toLowerCase().indexOf(this.state.keyword) === -1) {
                return;
            }

            result.push(
                <Suspense key={podcast.id} >
                    <Item podcast={podcast}/>
                </Suspense>
            );
        })
        return (
            <div className="podcast-list">
                <Suspense>
                    <SearchForm keyword={this.state.keyword} onSearch={this.onSearch} onKeywordChange={this.onKeywordChange} />
                </Suspense>
                
                <ul>
                    {result.length ? result : <span className="no-result" css={styles.empty}>Pencarian tidak ditemukan....</span>}
                </ul>
            </div>
        )
    }
}

const styles = {
    empty: css`
        display: block;
        font-style: italic;
        margin: 30px 0;
    `
}
export default List;