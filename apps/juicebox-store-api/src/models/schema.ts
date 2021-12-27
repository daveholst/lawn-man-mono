const Match = {
    ulid: /^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name: /^[a-z0-9 ,.'-]+$/i,
    address: /[a-z0-9 ,.-]+$/,
    zip: /^\d{5}(?:[-\s]\d{4})?$/,
    phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
}

export default {
    version: '0.0.1',
    indexes: {
        primary: { hash: 'pk', sort: 'sk' },
        gs1: { hash: 'gs1pk', sort: 'gs1sk', project: ['gs1pk', 'gs1sk'] },
    },
    models: {
        // this is prob going to error

        User: {
            pk: { type: String, value: 'user#${id}' },
            sk: { type: String, value: 'user#${email}' },
            id: { type: String, uuid: true, validate: Match.ulid },
            // TODO work out why unique was causing errors on the below
            cognitoId: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            username: { type: String, required: true },
            address: { type: String },
            postcode: { type: Number },
            state: { type: String },
            country: { type: String },
            climateZone: { type: String },
            role: {
                type: String,
                enum: ['user', 'admin'],
                required: true,
                default: 'user',
            },

            // search by email
            gs1pk: { type: String, value: 'user#' },
            gs1sk: { type: String, value: 'user#${email}' },
        },
        Opensprinkler: {
            pk: { type: String, value: 'user#${ownerId}' },
            sk: { type: String, value: 'opensprinkler#' },
            id: { type: String, uuid: true, validate: Match.ulid },
            uri: { type: String, required: true },
            apiKey: { type: String, required: true },
            ownerId: { type: String, required: true },

            // nested array schema not yet supported
            zones: {
                type: Array,
                //     schema: {
                //         stationNumber: { type: Number, required: true },
                //         name: { type: String, required: true },
                //         type: { type: String, required: true },
                //         area: { type: Number, required: true }, // m2
                //     },
            },
        },
        Juicebox: {
            pk: { type: String, value: 'user#${ownerId}' },
            sk: { type: String, value: 'juicebox#' },
            id: { type: String, uuid: true, validate: Match.ulid },
            ownerId: { type: String, required: true },
            deviceName: { type: String, required: true },
            fertBay1: {
                type: Object,
                schema: {
                    relayChannel: { type: Number, required: true, default: 1 },
                    status: {
                        type: String,
                        enum: ['idle', 'disabled', 'pumping', 'priming'],
                        required: true,
                        default: 'disabled',
                    },
                    pumpRate: { type: Number, default: 2.9 }, //  mL/sec
                    maxVolume: { type: Number }, //mL
                    currentVolume: { type: Number }, //  mL
                    fertilserId: { type: String },
                    fertiliserName: { type: String },
                    fertiliserRate: { type: Number }, //  mL/m2
                },
            },
            fertBay2: {
                type: Object,
                schema: {
                    relayChannel: { type: Number, required: true, default: 2 },
                    status: {
                        type: String,
                        enum: ['idle', 'disabled', 'pumping', 'priming'],
                        required: true,
                        default: 'disabled',
                    },
                    pumpRate: { type: Number, default: 2.9 }, //  mL/sec
                    maxVolume: { type: Number }, //mL
                    currentVolume: { type: Number }, //  mL
                    fertilserId: { type: String },
                    fertiliserName: { type: String },
                    fertiliserRate: { type: Number }, //  mL/m2
                },
            },
            fertBay3: {
                type: Object,
                schema: {
                    relayChannel: { type: Number, required: true, default: 3 },
                    status: {
                        type: String,
                        enum: ['idle', 'disabled', 'pumping', 'priming'],
                        required: true,
                        default: 'disabled',
                    },
                    pumpRate: { type: Number, default: 2.9 }, //  mL/sec
                    maxVolume: { type: Number }, //mL
                    currentVolume: { type: Number }, //  mL
                    fertilserId: { type: String },
                    fertiliserName: { type: String },
                    fertiliserRate: { type: Number }, //  mL/m2
                },
            },
        },

        // History: {}, //TODO run history entity schema
    },
}
