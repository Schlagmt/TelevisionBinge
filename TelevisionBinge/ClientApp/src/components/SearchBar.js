import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';

export class SearchBar extends Component {
    render() {
        return (
            <Form action="/r" method="get" style={{width: "100%"}}>
                <div className="input-group mb-3">
                    <Input type="text" className="form-control" name="search" placeholder="Attack on Titan" defaultValue={this.props.search}/>
                    <div className="input-group-append">
                        <Button type="submit">Search</Button>
                    </div>
                </div>
            </Form>
        );
    }
}
