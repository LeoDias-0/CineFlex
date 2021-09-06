import SubTitle from './SubTitle'
import MovieWrapper from './MovieWrapper'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ChooseMovie = () => {

    const moviesURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies'
    
    const [ movieList, setMovieList ] = useState([])

    let promise

    useEffect(() => {
        promise = axios.get(moviesURL)
        promise.then(response => setMovieList(response.data))
    }, [])

    return (
        <>
            <SubTitle>Selecione o filme</SubTitle>
            <MovieWrapper movieList={movieList}/>
        </>
    )
}

export default ChooseMovie