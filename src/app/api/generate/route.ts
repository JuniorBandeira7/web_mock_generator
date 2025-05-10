import { Faker, pt_BR } from '@faker-js/faker'
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const faker = new Faker({locale: pt_BR})

    type Types = {
        "Número Inteiro": number
        "Número": number
        "Nome": string
        "Nome de Empresa": string
        "Email": string
        "Data de nascimento": Date
        "Senha": string
    }

    type Field = {
        [T in keyof Types]: {
            name: string
            type: T
            value: Types[T] // T é um tipo dos tipos em "Types"
        }
    }[keyof Types]

    type Body = {
        [T in keyof Types]: {
            name: string
            type: T
        }
    }[keyof Types]

    const body:Body[] = await req.json()

    const response = []

    for (let i = 0; i < body.length; i++) {
        switch (body[i].type) {
            case "Número Inteiro":
                let nInt: Field = {
                    name: body[i].name,
                    type: "Número Inteiro",
                    value: faker.number.int()
                }
                response.push(nInt)
                break

            case "Número":
                let n: Field = {
                    name: body[i].name,
                    type: "Número",
                    value: faker.number.float()
                }
                response.push(n)
                break

            case "Nome":
                let name: Field = {
                    name: body[i].name,
                    type: "Nome",
                    value: faker.person.fullName()
                }
                response.push(name)
            break

            case "Nome de Empresa":
                let company : Field = {
                    name: body[i].name,
                    type: "Nome de Empresa",
                    value: faker.company.name()
                }
                response.push(company)
            break

            case "Email":
                let email : Field = {
                    name: body[i].name,
                    type: "Email",
                    value: faker.internet.email()
                }
                response.push(email)
            break

            case "Data de nascimento":
                let birthdate : Field = {
                    name: body[i].name,
                    type: "Data de nascimento",
                    value: faker.date.birthdate()
                }
                response.push(birthdate)
            break

            case "Senha":
                let password : Field = {
                    name: body[i].name,
                    type: "Senha",
                    value: faker.internet.password()
                }
                response.push(password)
            break


            default:
                return NextResponse.json({ message: "Erro de entrada" }, { status: 400 });
        }
    }

    return Response.json({message: "ok", response})
}