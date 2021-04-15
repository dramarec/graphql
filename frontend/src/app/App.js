// Core
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

// Components
// import { Pet } from './bus/pet';
// import { Customer } from './bus/customer';
// import { Login } from './bus/customer/login';
import { User } from './bus/user';

// Other
import { client } from './init/modern';

export const App = () => {
    return (
        <ApolloProvider client={client}>
            {/*<Customer />*/}
            {/*<Login />*/}
            {/*<Pet />*/}
            <User />
        </ApolloProvider>
    );
};
// // Core
// import React from 'react';
// import { ApolloProvider } from '@apollo/react-hooks';

// // Components
// // import { Customer } from './bus/customer/auth';
// import { Login } from './bus/customer/login';
// import { Pet } from './bus/pet';

// // Other
// import { client } from './init/client';

// export const App = () => {
//     return (
//         <ApolloProvider client={client}>
//             <h1>Hello graphQL</h1>

//             {/* <Customer /> */}
//             <Login />

//             <Pet />
//         </ApolloProvider>
//     );
// };
