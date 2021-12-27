import styled from '@emotion/styled'

/* eslint-disable-next-line */
export interface AuthComponentsProps {}

const StyledAuthComponents = styled.div`
    color: pink;
`

export function AuthComponents(props: AuthComponentsProps) {
    return (
        <StyledAuthComponents>
            <h1>Welcome to AuthComponents!</h1>
        </StyledAuthComponents>
    )
}

export default AuthComponents
