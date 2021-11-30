import React, { useState, useEffect } from "react";
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
    InputRightElement,
    FormLabel
} from "@chakra-ui/react";

import { FaUserAlt, FaLock } from "react-icons/fa";

// imports for cognito??
import Pool from '../config/userPool';



const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const getSession = async () => {
    return await new Promise((resolve, reject) => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.getSession((err: Error, session: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(session);
                    // console.log('Session Obj :: ', session);
                }
            });
        }
        // reject();
    });
};

interface userInfo {
    validUser: boolean
    userInfo?: any //TODO type this properly.
}

const App = () => {
    const [user, setUser] = useState(
        {
            validUser: false,
            userInfo: {}
        }
    )
    useEffect(() => {
        getSession().then((session: any) => {
            // console.log('Session :: ', session);
            // setStatus(true);
            setUser({
                validUser: true,
                userInfo: session
            })
        }).catch;
    }, []);
    console.log('Status now :: ', user);

    if (!user.validUser) {
        return (
            <p>No User Session???:</p>
        )
    }


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
                <Avatar bg="orange.500" />
                <Heading color="orange.400">Add a Fertiliser</Heading>
                {/* Form Data in here?  */}
                <Box minW={{ base: "90%", md: "468px" }}>

                    <Stack
                        spacing={4}
                        p="1rem"
                        backgroundColor="whiteAlpha.900"
                        boxShadow="md"
                    >
                        <FormControl id="product-name">
                            <FormLabel>Product Name</FormLabel>
                            <Input type="text" />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                    </Stack>
                </Box>
            </Stack>
            <Box>
                {/* {!signup ? "New to us? " : "Go back to "}
                <Link color="teal.500" href="#" onClick={() => setSignup(!signup)}>
                    {!signup ? "Sign Up" : "Login"}
                </Link> */}
            </Box>
        </Flex>
    );
};

export default App;
