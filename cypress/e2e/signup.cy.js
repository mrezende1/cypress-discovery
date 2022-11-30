import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'


before(function() {
    signupPage.go()
    signupPage.submit()
})
describe('Signup', function () {

    it('User should be deliver ', function () {

        var deliver = signupFactory.deliver()

        signupPage.go()
        signupPage.fillform(deliver)
        signupPage.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()
        deliver.cpf = "000000121aa"

        signupPage.go()
        signupPage.fillform(deliver)
        signupPage.submit()
        const expectedMessage = 'Oops! CPF inválido'
        signupPage.alertMessageShouldBe(expectedMessage)
    })

    it('Required fields', function () {
        const messages = [
            {
                field: "name",
                output: 'É necessário informar o nome'
            },
            {
                field: "cpf",
                output: 'É necessário informar o email'
            },
            {
                field: "email",
                output: 'É necessário informar o CPF'
            },
            {
                field: "postalcode",
                output: 'É necessário informar o CEP'
            },
            {
                field: "number",
                output: 'É necessário informar o número do endereço'
            },
            {
                field: "delivery_method",
                output: 'Selecione o método de entrega'
            },
            {
                field: "cnh",
                output: 'Adicione uma foto da sua CNH'
            }
        ]

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
})