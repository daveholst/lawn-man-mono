import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserAttribute,
    CookieStorage,
} from 'amazon-cognito-identity-js'
import userPool from '../config/userPool'

export const login = async (email: string, password: string) => {
    return await new Promise((resolve, reject) => {
        const userData = {
            Username: email,
            Password: password,
            Pool: userPool,
            Storage: new CookieStorage({
                secure: false,
                domain:
                    window.location.hostname === 'localhost'
                        ? 'localhost'
                        : 'lawnman.club',
            }),
        }

        const user = new CognitoUser(userData)

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        })

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log('onSuccess: ', data)
                resolve(data)
            },
            onFailure: (data) => {
                console.log('onFailure: ', data)
                reject(data)
            },
            newPasswordRequired: (data) => {
                console.log('newPasswordRequired: ', data)
                resolve(data)
            },
        })
    })
}

export const signup = async (
    email: string,
    password: string,
    username: string
) => {
    const name = new CognitoUserAttribute({ Name: 'name', Value: username })
    userPool.signUp(email, password, [name], [], (err, data) => {
        if (err) {
            console.error(err)
        }
        console.log(data)
    })
}
