import React from 'react';

const MovieCreate = (props) => {
    return (
        <form>
            <input type="text" placeholder="Title"/>
            <input type="text" placeholder="Director"/>
            <input type="number" placeholder="Metascore"/>
            <input type="text" placeholder="Stars"/>
        </form>
    )
}

export default MovieCreate;