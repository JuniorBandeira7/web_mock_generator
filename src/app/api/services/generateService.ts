import { Field } from '../types/Field';
import { BodyField } from '../types/BodyField';
import { Faker, pt_BR } from '@faker-js/faker'


export function generateService(bodyField: BodyField[], times: number) {
    const faker = new Faker({locale: pt_BR})
    const response = []

    for (let j = 0; j < times; j++) {
        const field = []
        for (let i = 0; i < bodyField.length; i++) {
            switch (bodyField[i].type) {
                case "Número Inteiro":
                    let nInt: Field = {
                        name: bodyField[i].name,
                        value: faker.number.int()
                    }
                    field.push(nInt)
                    break

                case "Número":
                    let n: Field = {
                        name: bodyField[i].name,
                        value: faker.number.float()
                    }
                    field.push(n)
                    break

                case "Nome":
                    let name: Field = {
                        name: bodyField[i].name,
                        value: faker.person.fullName()
                    }
                    field.push(name)
                break

                case "Nome de Empresa":
                    let company : Field = {
                        name: bodyField[i].name,
                        value: faker.company.name()
                    }
                    field.push(company)
                break

                case "Email":
                    let email : Field = {
                        name: bodyField[i].name,
                        value: faker.internet.email()
                    }
                    field.push(email)
                break

                case "Data de nascimento":
                    let birthdate : Field = {
                        name: bodyField[i].name,
                        value: faker.date.birthdate()
                    }
                    field.push(birthdate)
                break

                case "Senha":
                    let password : Field = {
                        name: bodyField[i].name,
                        value: faker.internet.password()
                    }
                    field.push(password)
                break

                case "Telefone":
                    let job : Field = {
                        name: bodyField[i].name,
                        value: faker.phone.number()
                    }
                    field.push(job)
                break

                default:
                    return "Erro de entrada"
            }
        }
        response.push(field)
    }
    return response
}