import UserModel from "../models/UserModel.js";

export const handleLogout = async (req, res) => {
    const { cookies } = req;
    if (!cookies?.jwt) {
        return res.sendStatus(204);
    } //No content
    const refreshToken = cookies.jwt;

    // Is refreshToken in db?
    const foundUser = await UserModel.findOne({ where: { refreshToken: refreshToken } })
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }

    // Delete refreshToken in db
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204);
}
