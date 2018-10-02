import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import query from '../queries/fetchSongs'
import mutationDelete from '../mutations/deleteSongs'

class SongList extends Component{
    onSongDelete(id) {
        // whenever you want to wire up a mutation to a 
        // component you can call it by referring to this duck props
        this.props.mutate({ variables: { id }
            })
            // Rerun the query assosiated with the component
            .then(() => this.props.data.refetch())
    }

    renderSongs() {
        return this.props.data.songs.map(
            ({ id, title }) => {
                return (
                    <li key={id} className="collection-item">
                        {title}
                        <i
                            className="material-icons"
                            onClick={() => this.onSongDelete(id)} 
                        >
                            delete
                        </i>
                    </li>
                )
            }
        )
    }
    
    render() {
    if (this.props.data.loading) { return <div>Loading...</div> }
        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link
                    to="songs/new"
                    className="btn-floating btn-large red right"
                    >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

// multiple functions call
export default graphql(mutationDelete)(
    graphql(query)(SongList)
)
