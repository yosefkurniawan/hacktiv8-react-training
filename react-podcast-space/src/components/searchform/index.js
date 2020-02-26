import React from "react";

class SearchForm extends React.Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        const keyword = new FormData(e.target).get('keyword');
        this.props.onSearch(keyword);
    }

    hanleKeywordChange = (e) => {
        this.props.onKeywordChange(e.target.value);
    }

    render() {
        return(
            <div className = "searchform" >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="keyword" placeholder="Cari Podcast..." value={this.props.keyword} onChange={this.hanleKeywordChange} />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;