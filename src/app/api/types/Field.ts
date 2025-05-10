import { Types } from "./Types"

export type Field = {
        [T in keyof Types]: {
            name: string
            value: Types[T] // T é um tipo dos tipos em "Types"
        }
}[keyof Types]