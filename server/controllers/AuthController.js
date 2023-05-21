import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const handleAuth = async (req, res) => res.json(req.user)

export const handleLogin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ 'message': 'Username and password are required.' });
    } // Bad request

    const foundUser = await UserModel.findOne({ where: { username: username } })
    if (!foundUser) {
        return res.sendStatus(401);
    } //Unauthorized

    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const accessToken = jwt.sign(
            {
                username: foundUser.username,
                id: foundUser.id
            },
            process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' }
        );
        res.json({ accessToken, user: { id: foundUser.id, name: foundUser.username } });
    } else {
        res.sendStatus(401);
    }
}
