import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { SearchBar } from './SearchBar';



export class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: props.location.search.replace('?search=', '')
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
