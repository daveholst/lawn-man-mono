import React, { useEffect, useState } from 'react'
import { RequireAuth, useAuth } from '@lawn-man-mono/shared-components'
import mqtt from 'mqtt'
import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Stack,
} from '@chakra-ui/react'
import axios from 'axios'

export const ControlPanel = () => {
    const { user, performLogout } = useAuth()
    const [conState, setConState] = useState(false)
    const [fert1Dose, setFert1Dose] = useState('500')
    const [client, setClient] = useState<null | mqtt.MqttClient>(null)

    const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
    const host = 'wss://mqtt.holstsolutions.com:443/ws/mqtt'
    const options = {
        username: 'juicebox',
        password: 'dY*t7LSgGhc%M4',
        keepalive: 60,
        clientId: clientId,
        protocolId: 'MQTT',
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000,
        useSSL: true,
    }
    const borePumpOn = (time: number) => {
        axios.get(`https://sprinklers.holst.solutions/cr`, {
            params: {
                pw: 'a6d82bced638de3def1e9bbb4983225c',
                t: `0,0,0,0,0,0,0,0,${time}`,
            },
        })
    }

    const mqttConnect = (host: string, mqttOption: mqtt.IClientOptions) => {
        // setConnectStatus('Connecting');
        setClient(mqtt.connect(host, mqttOption))
        client?.on('connect', () => {
            console.log('Connected')
            setConState(true)
        })
    }
    interface PublishType {
        topic: string
        payload: any
    }

    const publish = ({ topic, payload }: PublishType) => {
        if (client) {
            client.publish(topic, payload)
        }
    }

    // const waterOn = () => {
    //     if (client) {
    //         client.publish('juicebox1/water/on', 'on')
    //     }
    // }
    // const waterOff = () => {
    //     client?.publish('juicebox1/water/off', 'off')
    // }
    useEffect(() => {
        mqttConnect(host, options)
    }, [])

    useEffect(() => {
        if (client) {
            client.on('connect', () => {
                console.log('Connected')
                setConState(true)
            })

            client.on('error', (err) => {
                console.log('Connection error: ', err)
                client?.end()
            })

            client.on('reconnect', () => {
                console.log('Reconnecting...')
            })
        }
    }, [client])

    return (
        <Flex justify="center" direction="column">
            <Heading as="h2" size="2xl" margin="10px">
                Direct Control
            </Heading>{' '}
            <Heading as="h5" size="md" marginLeft="10px">
                {conState ? 'Connected' : 'Not Connected'} ||
            </Heading>
            <Box
                minW="xs"
                maxW="md"
                padding="10px"
                margin="5px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
            >
                <FormControl>
                    <FormLabel as="legend">Bore Pump</FormLabel>

                    <Stack
                        justify="space-around"
                        direction="row"
                        spacing={4}
                        align="center"
                    >
                        <Button
                            isFullWidth={true}
                            colorScheme="teal"
                            variant="solid"
                            onClick={() => borePumpOn(300)}
                        >
                            On
                        </Button>
                        <Button
                            isFullWidth={true}
                            colorScheme="red"
                            variant="solid"
                            onClick={() => borePumpOn(0)}
                        >
                            Off
                        </Button>
                    </Stack>
                    <br />
                    <FormLabel as="legend">Juicebox Bypass Valve</FormLabel>

                    <Stack
                        justify="space-around"
                        direction="row"
                        spacing={4}
                        align="center"
                    >
                        <Button
                            isFullWidth={true}
                            colorScheme="teal"
                            variant="solid"
                            onClick={() =>
                                publish({
                                    topic: 'juicebox1/bypass/on',
                                    payload: 'on',
                                })
                            }
                        >
                            Open
                        </Button>
                        <Button
                            isFullWidth={true}
                            colorScheme="red"
                            variant="solid"
                            onClick={() =>
                                publish({
                                    topic: 'juicebox1/bypass/off',
                                    payload: 'off',
                                })
                            }
                        >
                            Close
                        </Button>
                    </Stack>
                    <br />
                    <FormLabel as="legend">Water Dose Valve</FormLabel>

                    <Stack
                        justify="space-around"
                        direction="row"
                        spacing={4}
                        align="center"
                    >
                        <Button
                            isFullWidth={true}
                            colorScheme="teal"
                            variant="solid"
                            onClick={() =>
                                publish({
                                    topic: 'juicebox1/water/on',
                                    payload: 'on',
                                })
                            }
                        >
                            Open
                        </Button>
                        <Button
                            isFullWidth={true}
                            colorScheme="red"
                            variant="solid"
                            onClick={() =>
                                publish({
                                    topic: 'juicebox1/water/off',
                                    payload: 'off',
                                })
                            }
                        >
                            Close
                        </Button>
                    </Stack>
                    <br />

                    <FormLabel as="legend">Fertiliser Bay 1 Pump</FormLabel>

                    <Stack
                        justify="space-around"
                        direction="row"
                        spacing={4}
                        align="center"
                    >
                        <Button
                            isFullWidth={true}
                            colorScheme="teal"
                            variant="solid"
                            onClick={() =>
                                publish({
                                    topic: 'juicebox1/fert1/on',
                                    payload: 'on',
                                })
                            }
                        >
                            On
                        </Button>
                        <Button
                            isFullWidth={true}
                            colorScheme="red"
                            variant="solid"
                            onClick={() =>
                                publish({
                                    topic: 'juicebox1/fert1/off',
                                    payload: 'off',
                                })
                            }
                        >
                            Off
                        </Button>
                    </Stack>
                </FormControl>
            </Box>
            <Box
                minW="xs"
                maxW="md"
                padding="10px"
                margin="5px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
            >
                <FormControl>
                    <FormLabel as="legend">Dose Fertiliser 1</FormLabel>

                    <Stack
                        justify="space-around"
                        direction="row"
                        spacing={4}
                        align="center"
                    >
                        <InputGroup>
                            <Input
                                type="number"
                                placeholder="quantity"
                                onChange={(e) => setFert1Dose(e.target.value)}
                                defaultValue={fert1Dose}
                            />
                            <InputRightAddon children="mL" />
                        </InputGroup>
                        <Button
                            colorScheme="blue"
                            variant="solid"
                            onClick={() =>
                                publish({
                                    topic: 'juicebox1/fert1/runtime',
                                    payload: JSON.stringify(
                                        Math.round(Number(fert1Dose) / 2.9)
                                    ),
                                })
                            }
                        >
                            Dose
                        </Button>
                    </Stack>
                </FormControl>
            </Box>
        </Flex>
    )
}
