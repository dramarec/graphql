import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from './AppBar';

import { Customer } from './bus/customer/auth';
import { Login } from './bus/customer/login';
import { Pet } from './bus/pet';


export const App = () => {
    return (
        <Router>
            <AppBar />
            <Switch>
                <Route exact path="/" component={Pet} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/customer" component={Customer} />
            </Switch>
        </Router>
    );
};









// Core
// import React from 'react';
// import { ApolloProvider } from '@apollo/client';

// // Components
// import { Pet } from './bus/pet';
// // import { Customer } from './bus/customer';
// // import { Login } from './bus/customer/login';
// // import { User } from './bus/user';
// import './App.css'

// // Other
// // import { client } from './init/modern';
// import { client } from './init/client';

// export const App = () => {
//     return ( 
//         <ApolloProvider client={client}>
//             <Pet />
//             {/* <Customer /> */}
//             {/* <Login />
//             <User /> */}
//         </ApolloProvider>
//     );
// };
// // Core

