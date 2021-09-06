import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
    width: 100%;
    height: 110px;
`

const BoldText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    margin-left: 29px;
    margin-bottom: 10px;
    margin-top: 33px;
`

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    margin-left: 29px;
    margin-bottom: 10px;
`

const ReturnHome = styled(Link)`
    background: #E8833A;
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
    margin-top: 65px;
`

const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SuccessScreen = ({orderInfo}) => {
    return (
        <>
            <Title>Pedido feito com sucesso!</Title>
            <BoldText>Filme e sessão</BoldText>
            <Text>{orderInfo.title}</Text>
            <Text>{orderInfo.date} {orderInfo.time}</Text>
            <BoldText>Ingressos</BoldText>
            {
                orderInfo.seats.map(id => <Text key={id}>Assento {id}</Text>)
            }
            <BoldText>Comprador</BoldText>
            <Text>Nome: {orderInfo.name}</Text>
            <Text>CPF: {orderInfo.cpf}</Text>

            <CenterContainer>
                <ReturnHome to='/'>Voltar pra Home</ReturnHome>
            </CenterContainer>
        </>
    )
}

export default SuccessScreen