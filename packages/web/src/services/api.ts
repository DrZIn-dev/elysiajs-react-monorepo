import { edenTreaty } from '@elysiajs/eden/treaty'
import { App } from 'api'


export const api = edenTreaty<App>('http://localhost:3000')