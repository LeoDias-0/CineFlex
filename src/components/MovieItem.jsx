import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled(Link)`
    padding: 5px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : '11px'};
    display: inline-block;
`

const ImgContainer = styled.img`
    height: ${({height}) => height ? height : '193px'};
    width: ${({width}) => width ? width : '129px'};
    object-fit: cover;
`

const MovieItem = ({ id, posterURL, width, height, marginBottom }) => {
    
    return (
        <Container to={`/sessoes/${id}`} marginBottom={marginBottom}>
            <ImgContainer src={posterURL} width={width} height={height}/>
        </Container>
    )
}

export default MovieItem