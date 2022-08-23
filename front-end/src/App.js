import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {HomePage}  from './pages/HomePage.js';
import {Login} from './pages/Login.js';
import {Profile} from './pages/Profile.js';
import {Register} from './pages/Register'
import {SingleProduct} from './pages/SingleProduct.js';
import {Cart} from './pages/Cart.js'
import {ShippingSettings} from './pages/ShippingSettings'
import {PlaceOrder} from './pages/PlaceOrder'
import { Order } from './pages/Order.js';
import { Browse } from './pages/Browse.js';


function App() {
  return (
    <Router>
        <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/Browse' component={Browse}/>
            <Route path='/Login' component={Login} />
            <Route path='/Register' component={Register} />
            <Route path='/Profile' component={Profile} />
            <Route path='/SingleProduct/:id' component={SingleProduct} />
            <Route path='/Cart/:id?' component={Cart} />
            <Route path='/ShippingSettings' component={ShippingSettings}/>
            <Route path='/PlaceOrder' component={PlaceOrder}/>
            <Route path='/Order/:id' component={Order}/>
        </Switch>
    </Router>
  );
}

export default App;
