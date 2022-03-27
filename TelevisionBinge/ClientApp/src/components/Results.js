import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import $ from 'jquery';
import { SearchBar } from './SearchBar';

export class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: props.location.search.replace('?search=', ''),
            shows: Search(props.location.search.replace('?search=', ''))
        }
    }

    render () {
        return (
            <Container>
                <Row>
                    <SearchBar search={this.state.search} />
                </Row>
            </Container>
    );
  }
}

async function Search(search) {
    $.ajax({
        url: document.location.origin + "/search/SearchTelevisionShow?search=" + search,
        type: "Get",
        success: function (data) {
            return data.results;
        },
        error: function (error) {
            console.log(error);
        }
    });
}
