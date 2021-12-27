import { render } from '@testing-library/react'

import AuthComponents from './auth-components'

describe('AuthComponents', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<AuthComponents />)
        expect(baseElement).toBeTruthy()
    })
})
