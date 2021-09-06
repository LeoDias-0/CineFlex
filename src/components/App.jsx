import ResetCSS from './ResetCSS'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import ChooseMovie from './ChooseMovie'
import ChooseSession from './ChooseSession'
import ChooseSeats from './ChooseSeats'
import SuccessScreen from './SuccessScreen'
import MainContentWrapper from './MainContentWrapper'
import { useState } from 'react'


const App = () => {
    const headerHeight = '67px'

    const [ orderInfo, setOrderInfo ] = useState({})

    return (
        <Router>
            <ResetCSS />
            <Header headerHeight={headerHeight} />

            <MainContentWrapper marginTop={headerHeight}>
                <Switch>
                    <Route path='/' exact>
                        <ChooseMovie/>
                    </Route>
                    <Route path='/sessoes/:movieId' exact>
                        <ChooseSession/>
                    </Route>
                    <Route path='/assentos/:movieId' exact>
                        <ChooseSeats setOrderInfo={setOrderInfo}/>
                    </Route>
                    <Route path='/sucesso' exact>
                        <SuccessScreen orderInfo={orderInfo}/>
                    </Route>
                </Switch>
            </MainContentWrapper>


        </Router>
    )
}

export default App