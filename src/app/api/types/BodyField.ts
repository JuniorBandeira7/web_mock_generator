import { Types } from "./Types";

export type BodyField = {
        [T in keyof Types]: {
            name: string
            type: T
        }
    }[keyof Types]