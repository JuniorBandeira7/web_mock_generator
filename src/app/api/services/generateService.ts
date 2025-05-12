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
                    const nInt: Field = {
                        name: bodyField[i].name,
                        value: faker.number.int()
                    }
                    const nIntJsonField = JSON.parse(`{${JSON.stringify(nInt.name)}: ${JSON.stringify(nInt.value)}}`)
                    field.push(nIntJsonField)
                    break

                case "Número":
                    const n: Field = {
                        name: bodyField[i].name,
                        value: faker.number.float()
                    }
                    const NJsonField = JSON.parse(`{${JSON.stringify(n.name)}: ${JSON.stringify(n.value)}}`)
                    field.push(NJsonField)
                    break

                case "Nome":
                    const name: Field = {
                        name: bodyField[i].name,
                        value: faker.person.fullName()
                    }
                    const nameJsonField = JSON.parse(`{${JSON.stringify(name.name)}: ${JSON.stringify(name.value)}}`)
                    field.push(nameJsonField)
                break

                case "Nome de Empresa":
                    const company : Field = {
                        name: bodyField[i].name,
                        value: faker.company.name()
                    }
                    const companyJsonField = JSON.parse(`{${JSON.stringify(company.name)}: ${JSON.stringify(company.value)}}`)
                    field.push(companyJsonField)
                break

                case "Email":
                    const email : Field = {
                        name: bodyField[i].name,
                        value: faker.internet.email()
                    }
                    const emailJsonField = JSON.parse(`{${JSON.stringify(email.name)}: ${JSON.stringify(email.value)}}`)
                    field.push(emailJsonField)
                break

                case "Data de nascimento":
                    const birthdate : Field = {
                        name: bodyField[i].name,
                        value: faker.date.birthdate()
                    }
                    const birthdateJsonField = JSON.parse(`{${JSON.stringify(birthdate.name)}: ${JSON.stringify(birthdate.value)}}`)
                    field.push(birthdateJsonField)
                break

                case "Senha":
                    const password : Field = {
                        name: bodyField[i].name,
                        value: faker.internet.password()
                    }
                    const passwordJsonField = JSON.parse(`{${JSON.stringify(password.name)}: ${JSON.stringify(password.value)}}`)
                    field.push(passwordJsonField)
                break

                case "Telefone":
                    const job : Field = {
                        name: bodyField[i].name,
                        value: faker.phone.number()
                    }
                    const jobJsonField = JSON.parse(`{${JSON.stringify(job.name)}: ${JSON.stringify(job.value)}}`)
                    field.push(jobJsonField)
                break

                default:
                    return "Erro de entrada"
            }
        }
        for (let i = 0; i < field.length; i++) {
            if (i === 0) {
                var mergedField = field[i]
            } else {
                mergedField = Object.assign(mergedField, field[i])
            }
        }
        response.push(mergedField)
    }
    return response
}