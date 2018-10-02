import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchOneSong from '../queries/fetchOneSong'

class SongDetail extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Song Detail</h3>
            </div>
        )
    }
}

export default graphql(fetchOneSong)(SongDetail)
