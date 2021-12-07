import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserAttribute,
    CookieStorage,
    ICognitoUserSessionData,
    CognitoIdToken,
    CognitoUserSession,
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

// not sure if below actually needs to expliciitly return a promise??
export const getCurrentUser = async (): Promise<any> => {
    return await new Promise((resolve, reject) => {
        const user = userPool.getCurrentUser()
        user?.getSession(
            async (err: Error, session: ICognitoUserSessionData | null) => {
                if (err || !session) {
                    reject(err || session)
                } else {
                    resolve(session)
                }
            }
        )
    })
}

// something feels off here??
export const logout = async () => {
    try {
        const user = userPool.getCurrentUser()
        user?.signOut()
    } catch (error) {
        console.error(error)
    }
}

// TODO write a logout function?
