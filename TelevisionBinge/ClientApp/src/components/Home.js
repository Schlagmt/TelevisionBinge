import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { SearchBar } from './SearchBar';

export class Home extends Component {

  render () {
    return (
        <Container>
            <Row>
                <SearchBar search="" />
            </Row>
            <Row>
                <p>Hello this is a temp message!</p>
            </Row>
        </Container>
    );
  }
}
