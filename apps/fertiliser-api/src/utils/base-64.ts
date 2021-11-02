// const b64 = 'SGVsbG8sIFdvcmxkIQ=='
// const str = 'Hello, World!'

export const base64decode = (str: string): string =>
    Buffer.from(str, 'base64').toString('binary')
export const base64encode = (str: string): string =>
    Buffer.from(str, 'binary').toString('base64')

// test('base64 decode', () => {
//     expect(decode(b64)).toEqual(str)
// })

// test('base64 decode', () => {
//     expect(encode(str)).toEqual(b64)
// })

// test('base64 encode/decode', () => {
//     expect(decode(encode(str))).toEqual(str)
// })
