import Schema from './schema'
import { Entity } from 'dynamodb-onetable'

export type UserType = Entity<typeof Schema.models.User>
// export type OpensprinklerType = Entity<
//     typeof JuiceboxSchema.models.Opensprinkler
// >
// export type JuiceboxType = Entity<typeof JuiceboxSchema.models.Juicebox>

export interface UserDTO {
    cognitoId: string
    email: string
    firstName: string
    lastName: string
    username: string
    address?: string
    postcode?: number
    country?: string
    climateZone?: string
    role: 'user' | 'admin'
}

export interface UserDataDTO {
    user: UserDTO
    // opensprinkler: OpensprinklerType
    // juicebox: JuiceboxType
}
// opensprinkler: OpensprinklerType
// juicebox: JuiceboxType
