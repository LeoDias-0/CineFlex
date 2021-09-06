import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'


const TextContainer = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
    margin-left: 24px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 24px;
`

const TimeButton = styled(Link)`
    background-color: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    padding: 9px 14px;
    margin-top: 22px;
    margin-bottom: 23px;
    margin-right: 8px;
    text-decoration: none;
`



const SessionItem = (props) => {
    const { movieId } = useParams()

    return (
        <>
            <TextContainer>{props.weekday} - {props.date}</TextContainer>
            <Container>
                {props.showtimes.map(({name, id}) => <TimeButton to={`/assentos/${movieId}`} key={id}>{name}</TimeButton>)}
            </Container>

        </>
    )
}

export default SessionItem