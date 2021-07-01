import { Switch, Route } from 'react-router-dom'
import Home from './core/Home'
import Shop from './core/Shop'

export default function Routes() {
    return (
        <Switch>
            <Route  path="/" component={Home} exact/>
            <Route  path="/shop" component={Shop}/>
        </Switch>
    )
}
