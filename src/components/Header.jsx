import styled from 'styled-components'


const Container = styled.div`
    position: fixed;
    width: 100%;
    height: ${props => props.headerHeight};
    box-sizing: border-box;
    top: 0;
    left: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 12px 0;
    background-color: #C3CFD9;
    color: #E8833A;
`

const Header = ({ headerHeight }) => {
    return (
        <Container headerHeight={headerHeight}>
            CINEFLEX
        </Container>
    )
}

export default Header