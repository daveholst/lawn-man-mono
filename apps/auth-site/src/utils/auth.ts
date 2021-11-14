import {
    AuthenticationDetails,
    CognitoUser,
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

export const signup = async (email: string, password: string) => {
    userPool.signUp(email, password, [], [], (err, data) => {
        if (err) {
            console.error(err)
        }
        console.log(data)
    })
}
