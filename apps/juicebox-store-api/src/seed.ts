import juiceboxArn from '../src/config/juicebox-store.prod.config'

import { Table } from 'dynamodb-onetable'
import DynamoDB from 'aws-sdk/clients/dynamodb'

const client = new DynamoDB.DocumentClient()