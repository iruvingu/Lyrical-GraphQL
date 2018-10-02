import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'

import query from '../queries/fetchSongs'
import addSong from '../mutations/addSong'

class SongCreate extends Component {
    constructor(props) {
        super(props)

        this.state = { title: '' }
    }

    onSubmit(event) {
        event.preventDefault()

        this.props.mutate({
            variables: {
                title: this.state.title, //value of the text input
            },
            refetchQueries: [{ query }]
        })
        .then(() => hashHistory.push('/')
        )
    }

    render() {
        return (
            <div>
                <Link
                    to="/"
                >
                Back
                </Link>
                <h3>Create a new song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input 
                        onChange={event => this.setState({ title: event.target.value })}
                        value={this.state.title}
                    />
                </form>
            </div>
        )
    }
}

export default graphql(addSong)(SongCreate)
