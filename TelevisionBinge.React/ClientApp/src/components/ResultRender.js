import React, { Component } from 'react';

export class ResultRender extends Component {
    render() {
        if (this.props.searchStatus === "No Search") {
            return (
                <div>
                    <p>No Search</p>
                </div>
            );
        }
        if (this.props.searchStatus === "Searching") {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }
        else if (this.props.searchStatus === "No Results") {
            return (
                <div>
                    <p><i>No results found for "{ this.props.search }"</i></p>
                </div>
            );
        }
        else {
            return (
                <div>
                    {this.props.shows}
                </div>
            );
        }
    }
}
