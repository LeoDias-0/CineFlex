import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
`

const Seat = styled.div`
    background-color: ${({color}) => color};
    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 50%;
    width: 26px;
    min-height: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
    color: #000000;
    flex-basis: calc(8%);
    margin: 6px 3px;
    text-decoration: none;
`

const Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 25px;
`

const SeatsWrapper = ({seats, selectedSeats, setSelectedSeats}) => {

    const selectedColor = '#8DD7CF'
    const availableColor = '#C3CFD9'
    const unavailableColor = '#FBE192'

    const handleClick = (name, isAvailable) => {
        if (!isAvailable) {
            alert('Esse assento não está disponível.')
            return
        }

        const indexOfName = selectedSeats.indexOf(name)

        if (indexOfName === -1) {
            setSelectedSeats([...selectedSeats, name])
            return
        }

        setSelectedSeats(selectedSeats.filter(value => value !== name))
    }

    return (
        <>
            <Container>
                {
                    seats.map(seat => {
                        let color = seat.isAvailable ? availableColor : unavailableColor
                        if (selectedSeats.includes(seat.name)) color = selectedColor

                        return (
                            <Seat onClick={() => handleClick(seat.name, seat.isAvailable)} key={seat.id} color={color}>{seat.name}</Seat>
                        )
                    })
                }
            </Container>
            <DescriptionContainer>
                <Description>
                    <Seat color={selectedColor}></Seat>
                    <Text>Selecionado</Text>
                </Description>
                <Description>
                    <Seat color={availableColor}></Seat>
                    <Text>Disponível</Text>
                </Description>
                <Description>
                    <Seat color={unavailableColor}></Seat>
                    <Text>Indisponível</Text>
                </Description>
            </DescriptionContainer>
            
        </>
    )
}

export default SeatsWrapper