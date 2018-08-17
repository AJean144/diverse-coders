import React, { Component } from 'react';
import axios from 'axios';

import MyContext from './MyContext';

class MyProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialjobs: [],
            jobs: [],
            createJobPost: this.createJobPost
        }

        this.createJobPost = this.createJobPost.bind(this)
    }

    // Get job posts from the API
    componentDidMount() {
        axios.get('http://localhost:3000/api/v1/job_posts')
            .then((res) => this.setState({ jobs: res.data.jobs, initialjobs: res.data.jobs }))
            .catch((err) => console.error(err))
    }

    createJobPost(payload) {
        axios.post('http://localhost:3000/api/v1/job_posts', payload)
            .then((res) => {
                const { data } = res
                const { jobs } = this.state

                jobs.push(data)
                this.setState({ jobs })
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