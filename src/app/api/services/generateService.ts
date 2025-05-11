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
                    let nIntJsonField = JSON.parse(`{${JSON.stringify(nInt.name)}: ${JSON.stringify(nInt.value)}}`)
                    field.push(nIntJsonField)
                    break

                case "Número":
                    let n: Field = {
                        name: bodyField[i].name,
                        value: faker.number.float()
                    }
                    let NJsonField = JSON.parse(`{${JSON.stringify(n.name)}: ${JSON.stringify(n.value)}}`)
                    field.push(NJsonField)
                    break

                case "Nome":
                    let name: Field = {
                        name: bodyField[i].name,
                        value: faker.person.fullName()
                    }
                    let nameJsonField = JSON.parse(`{${JSON.stringify(name.name)}: ${JSON.stringify(name.value)}}`)
                    field.push(nameJsonField)
                break

                case "Nome de Empresa":
                    let company : Field = {
                        name: bodyField[i].name,
                        value: faker.company.name()
                    }
                    let companyJsonField = JSON.parse(`{${JSON.stringify(company.name)}: ${JSON.stringify(company.value)}}`)
                    field.push(companyJsonField)
                break

                case "Email":
                    let email : Field = {
                        name: bodyField[i].name,
                        value: faker.internet.email()
                    }
                    let emailJsonField = JSON.parse(`{${JSON.stringify(email.name)}: ${JSON.stringify(email.value)}}`)
                    field.push(emailJsonField)
                break

                case "Data de nascimento":
                    let birthdate : Field = {
                        name: bodyField[i].name,
                        value: faker.date.birthdate()
                    }
                    let birthdateJsonField = JSON.parse(`{${JSON.stringify(birthdate.name)}: ${JSON.stringify(birthdate.value)}}`)
                    field.push(birthdateJsonField)
                break

                case "Senha":
                    let password : Field = {
                        name: bodyField[i].name,
                        value: faker.internet.password()
                    }
                    let passwordJsonField = JSON.parse(`{${JSON.stringify(password.name)}: ${JSON.stringify(password.value)}}`)
                    field.push(passwordJsonField)
                break

                case "Telefone":
                    let job : Field = {
                        name: bodyField[i].name,
                        value: faker.phone.number()
                    }
                    let jobJsonField = JSON.parse(`{${JSON.stringify(job.name)}: ${JSON.stringify(job.value)}}`)
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