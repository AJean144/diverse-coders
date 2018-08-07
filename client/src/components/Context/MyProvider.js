import React, { Component } from 'react';
import axios from 'axios';

import MyContext from './MyContext';

class MyProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            initialUsers: []
        }
    }

    // Get users from the API
    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then((res) => {
                const { data: { results } } = res;
                this.setState({
                    users: results,
                    initialUsers: results,
                })
            })
            .catch((err) => console.error(err))
    }

    render() {
        const { state } = this;
        return (
            <MyContext.Provider value={{ state }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;