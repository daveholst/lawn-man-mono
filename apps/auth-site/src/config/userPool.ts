import { CognitoUserPool, CookieStorage } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: 'ap-southeast-2_gw39jNQMX',
    ClientId: '58nmodulq3fcf1juh3gmjgfvog',
    Storage: new CookieStorage({
        secure: false,
        domain:
            window.location.hostname === 'localhost'
                ? 'localhost'
                : 'lawnman.club',
    }),
}

export default new CognitoUserPool(poolData)
