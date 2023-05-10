import React, { PureComponent } from 'react';
import axios from 'axios';

import MyContext from './MyContext';
import { API_PATH } from '../../lib/paths';

class MyProvider extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            initialjobs: [],
            jobs: [],
            createJobPost: this.createJobPost,
            showJobPost: this.showJobPost,
            selectedJobPost: {}
        }
    }

    // Get job posts from the API
    componentDidMount() {
        axios.get(`${API_PATH}job_posts`)
            .then((res) => this.setState({ jobs: res.data.jobs, initialjobs: res.data.jobs }))
            .catch((err) => console.error(err))
    }

    createJobPost = (payload) => (
        axios.post(`${API_PATH}job_posts`, payload)
            .then((res) => {
                const { data } = res
                const { jobs } = this.state

                jobs.push(data)
                this.setState({ jobs })
            })
            .catch((err) => console.error(err))
    )

    showJobPost = (id, props) => {
        axios.get(`${API_PATH}job_posts/${id}`)
            .then((res) => {
                this.setState({ selectedJobPost: res.data.job })
                props.history.push(`job_posts/${id}`)
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