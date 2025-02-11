import { Action, PromiseAction } from '../../../src'
import { Message } from '../../src/types'

export type StartSession = () => PromiseAction
export type Shout = (message: Message) => PromiseAction
export type InboxMessages = () => Action<readonly Message[]>
