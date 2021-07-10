import jwt from 'jsonwebtoken';

export const verifyUser = async (req) => {
    try {
        // req.email = null;
        const bearerHeader = req.headers.authorization;
        if (bearerHeader) {
            const token = bearerHeader.split(' ')[1];

            // const payload = jwt.verify(token, process.env.JWT_SECRET_KEY || 'mysecretkey');
            const payload = jwt.verify(token, 'mysecretkey');

            req.email = payload.email;
        }
        // if (!req.email) {
        //     throw new Error('Access denied! Please login!')
        // }
    } catch (error) {
        console.log(error);
        throw error;
    }
}