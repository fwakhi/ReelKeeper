import UserModel from "../models/UserModel.js";
import jwt from 'jsonwebtoken';


export const handleRefreshToken = async (req, res) => {
    const { cookies } = req;
    if (!cookies?.jwt) {
        return res.sendStatus(401);
    }
    const refreshToken = cookies.jwt;
    const foundUser = await UserModel.findOne({ where: { refreshToken: refreshToken } })
    if (!foundUser) {
        return res.sendStatus(403);
    } //Forbidden
    // evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) {
                return res.sendStatus(403);
            }
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": decoded.username,
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '1d' }
            );
            res.json({ accessToken })
        }
    );
}
