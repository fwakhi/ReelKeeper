import UserModel from "../models/UserModel.js";

import bcrypt from 'bcrypt';


export const handleNewUser = async (req, res) => {
    const { user, password, email } = req.body;
    if (!user || !password || !email) {
        return res.status(400).json({ 'message': 'Username, email and password are required.' });
    }

    // check for duplicate usernames in the db
    const duplicateUsername = await UserModel.findOne({ where: { username: user } })
    if (duplicateUsername) {
        return res.sendStatus(409);
    }
    const duplicateEmail = await UserModel.findOne({ where: { email: email } })
    if (duplicateEmail) {
        return res.sendStatus(408);
    }

    try {
        const hashedPwd = await bcrypt.hash(password, 10);
        await UserModel.create({
            "username": user,
            "password": hashedPwd,
            "email": email
        })
        res.json({ message: 'User created' })
        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (error) {
        res.status(500).json({ 'message': error.message });
        res.json({ message: error.message })
    }
}
