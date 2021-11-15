import React, { useState } from "react";

import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { signup } from '../utils/auth'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await signup(email, password, username);
            console.log('Signed Up: ', data);
        } catch (error) {
            console.error('Failed to SignUp: ', error);
        }
    };


    return (
        <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={onSubmit}>
                <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"
                >
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CFaUserAlt color="gray.300" />}
                            />
                            <Input
                                type="text"
                                placeholder="username"
                                onChange={(e: React.FormEvent) => setUsername(e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CFaUserAlt color="gray.300" />}
                            />
                            <Input
                                type="email"
                                placeholder="email address"
                                onChange={(e: React.FormEvent) => setEmail(e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                children={<CFaLock color="gray.300" />}
                            />
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                onChange={(e: React.FormEvent) => setPassword(e.target.value)}
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                    {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {/* <FormHelperText textAlign="right">
                            <Link>forgot password?</Link>
                        </FormHelperText> */}
                    </FormControl>
                    <Button
                        borderRadius={0}
                        type="submit"
                        variant="solid"
                        colorScheme="teal"
                        width="full"
                    >
                        Signup
                    </Button>
                </Stack>
            </form>
        </Box>

    )
}
