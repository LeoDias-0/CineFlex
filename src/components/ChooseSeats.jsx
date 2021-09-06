import styled from 'styled-components'
import SubTitle from './SubTitle'
import SeatsWrapper from './SeatsWrapper'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import OrderInfo from './OrderInfo'
import MovieItem from './MovieItem'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Container = styled.div`
    padding: 0 24px;
    ::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: normal;
        font-size: 18px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
    }
`

const Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #293845;
`

const CustomInput = styled.input`
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;
    width: 100%;
    height: 51px;
    margin-bottom: 9px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: black;
`

const ReserveButton = styled(Link)`
    background-color: #E8833A;
    border-radius: 3px;
    width: 225px;
    height: 42px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    text-decoration: none;
`

const CenterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ChooseSeats = ({ setOrderInfo }) => {

    const { movieId } = useParams()

    const bookManyURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many'

    const seatURL = `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${movieId}/seats`

    const [ seats, setSeats ] = useState({
        name: '',
        day: {weekday: ''},
        seats: [],
        movie: {posterURL: '', title: ''}
    })

    const [ selectedSeats, setSelectedSeats ] = useState([])

    const [ customerName, setCustomerName ] = useState('')
    const [ customerCPF, setCustomerCPF ] = useState('')

    const sendReserve = () => {
        if (!selectedSeats.length > 0) return

        setOrderInfo({
            movie: seats.movie.title,
            date: seats.day.date,
            time: seats.name,
            name: customerName,
            cpf: customerCPF,
            seats: selectedSeats
        })

        axios.post(bookManyURL, {
            ids: selectedSeats,
            name: customerName,
            cpf: customerCPF
        })
    }

    useEffect(() => {
        const promise = axios.get(seatURL)
        promise.then(response => setSeats(response.data))
    })

    return (
        <Container>
            <SubTitle>Selecione o(s) assento(s)</SubTitle>

            <SeatsWrapper
                seats={seats.seats}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
            />

            <Text>Nome do comprador:</Text>
            <CustomInput
                type="text"
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
                placeholder='Digite seu nome...'
            />

            <Text>CPF do comprador:</Text>
            <CustomInput
                type="text"
                value={customerCPF}
                onChange={e => setCustomerCPF(e.target.value)}
                placeholder='Digite seu CPF...'
            />

            <CenterContainer>
                <ReserveButton
                    to='/sucesso'
                    style={selectedSeats.length > 0 ? {} : { pointerEvents: 'none' }}
                    onClick={sendReserve}>
                        Reservar assento(s)
                </ReserveButton>
            </CenterContainer>

            <Footer>
                <MovieItem
                    posterURL={seats.movie.posterURL}
                    width='64px'
                    height='89px'
                    marginBottom='0'
                />
                <OrderContainer>
                    <OrderInfo>{seats.movie.title}</OrderInfo>
                    <OrderInfo>{seats.day.weekday} - {seats.name}</OrderInfo>
                </OrderContainer>
                
            </Footer>
        </Container>
    )
}

export default ChooseSeats