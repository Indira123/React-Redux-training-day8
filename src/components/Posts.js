import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../js/actions/index";

export class Post extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <ul>
                {this.props.isLoading &&
                    <h2>Data Loading...</h2>
                }
                {this.props.articles.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        );
    }
}
function mapStateToProps(state) {
    return {
        articles: state.postsReducer.remoteArticles.slice(0, 10),
        isLoading: state.postsReducer.itemsLoading
    };
}

export default connect(
    mapStateToProps,
    { getData }
)(Post);