import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Form, Input, Button } from 'reactstrap';
import { ResultRender } from './ResultRender';

export class Home extends Component {
    constructor() {
        super();

        this.state = {
            search: "",
            shows: [],
            searchStatus: "No Search"
        }
    }

    handleSearchChange = (e) => {
        this.setState({ search: e.target.value });
    }

    Search() {
        this.setState({ searchStatus: "Searching" });
        $.ajax({
            url: document.location.origin + "/data/SearchTelevisionShow",
            contentType: "application/json; charset=utf-8",
            type: "POST",
            data: {
                search: this.state.search
            },
            success: function (data) {
                this.setState({ shows: data.results });
                if (data.results === []) {
                    this.setState({ searchStatus: "No Results" });
                }
                else {
                    this.setState({ searchStatus: "Done Search" });
                }
                
            },
            error: function (error) {
                console.log(error);
                this.setState({ searchStatus: "Done Search" });
            }
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Form style={{ width: "100%" }}>
                        <div className="input-group mb-3">
                            <Input type="text" className="form-control" name="search" placeholder="Attack on Titan"
                                value={this.state.search} onChange={this.handleSearchChange} />
                            <div className="input-group-append">
                                <Button type="button" onClick={ this.Search.bind(this) }>Search</Button>
                            </div>
                        </div>
                    </Form>
                </Row>
                <Row>
                    <ResultRender status={ this.state.searchStatus } shows={ this.state.shows } search={this.state.search} />
                </Row>
            </Container>
        );
    }
}
