import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

const mutationCheckOut = loader('./gql/mutationCheckOut.graphql');

export const useCheckOut = () => {
    const [_checkOut, { data, error, loading }] = useMutation(mutationCheckOut);
    const [errors, setErrors] = useState(false);

    const checkOut = id => {
        (async () => {
            try {
                await _checkOut({
                    variables: {
                        id
                    }
                });
            } catch (errors) {
                setErrors(errors.message);
            }
        })();
    };

    const pet = data && data.checkOut.pet;

    return {
        checkOut,
        pet,
        errors,
        error,
        loading
    };
};

// export const useCheckin = () => {
//     const [_checkIn, response] = useMutation(mutationCheckIn);
//     console.log("🔥🚀 ===> useCheckin ===> response", response);
//     console.log("🔥🚀 ===> useCheckin ===> errorApollo", response.error);
//     // const [_checkIn, { data, error }] = useMutation(mutationCheckIn);

//     const [errors, setErrors] = useState(false);
//     console.log('useCheckin ===> errors', errors);

//     const checkIn = id => {
//         (async () => {
//             try {
//                 await _checkIn({
//                     variables: {
//                         id
//                     }
//                 });
//             } catch (errors) {
//                 setErrors(errors.message);
//             }
//         })();
//     };

//     const pet = response.data && response.data.checkIn.pet;

//     return {
//         checkIn,
//         pet,
//         errors,
//     };
// };