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

import { Login } from '../components/Login'
import { Signup } from '../components/Signup'

import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);


export function Auth() {
    const [signup, setSignup] = useState(false)

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Welcome</Heading>
                {!signup ? <Login /> : <Signup />}
            </Stack>
            <Box>
                {!signup ? "New to us? " : "Go back to "}
                <Link color="teal.500" href="#" onClick={() => setSignup(!signup)}>
                    {!signup ? "Sign Up" : "Login"}
                </Link>
            </Box>
        </Flex>
    );
}