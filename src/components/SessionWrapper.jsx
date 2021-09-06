import styled from "styled-components"
import SessionItem from "./SessionItem"


const Container = styled.div`
    margin-bottom: 145px;
`

const SessionWrapper = ({sessionsList}) => {

    return (
        <Container>
            {
                sessionsList.map((session, index) => {
                    return (
                        <SessionItem
                            weekday={session.weekday}
                            date={session.date}
                            showtimes={session.showtimes}
                            key={index}
                        />
                    )
                })
            }
        </Container>
    )
}

export default SessionWrapper