import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

const mutationCheckIn = loader('./gql/mutationCheckIn.graphql');

export const useCheckin = () => {
    const [_checkIn, { data, error, loading }] = useMutation(mutationCheckIn);
    const [errors, setErrors] = useState(false);

    const checkIn = id => {
        (async () => {
            try {
                await _checkIn({
                    variables: {
                        id
                    }
                });
            } catch (errors) {
                setErrors(errors.message);
            }
        })();
    };

    const pet = data && data.checkIn.pet;

    return {
        checkIn,
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