import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserAttribute,
    CookieStorage,
    ICognitoUserSessionData,
    CognitoIdToken,
    CognitoUserSession,
} from 'amazon-cognito-identity-js'
import userPool from './userPoolConfig'

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
        // TODO this prob needs a look at
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
export const getCurrentUser = (): Promise<ICognitoUserSessionData> => {
    return new Promise((resolve, reject) => {
        const user = userPool.getCurrentUser()
        if (!user) {
            reject('No local user found.')
        }
        user?.getSession(
            (err: Error, session: ICognitoUserSessionData | null) => {
                if (err || !session) {
                    reject('User found, but could not get session data.')
                } else {
                    resolve(session)
                }
            }
        )
    })
}

export const logout = async () => {
    try {
        const user = userPool.getCurrentUser()
        user?.signOut()
    } catch (error) {
        console.error(error)
    }
}
