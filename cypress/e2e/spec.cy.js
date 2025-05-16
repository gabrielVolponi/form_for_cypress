import { de } from "@faker-js/faker"

describe('Form para testes automatizados', () => {
  beforeEach(() => {
    cy.visit('/index.html')
    cy.get("[data-cy='text']").as('text')
    cy.get("[data-cy='email']").as('email')
    cy.get("[data-cy='password']").as('password')
    cy.get("[data-cy='number']").as('number')
    cy.get("[data-cy='tel']").as('tel')
    cy.get("[data-cy='url']").as('url')
    cy.get("[data-cy='date']").as('date')
    cy.get("[data-cy='time']").as('time')
    cy.get("[data-cy='datetime']").as('datetime')
    cy.get("[data-cy='month']").as('month')
    cy.get("[data-cy='week']").as('week')
    cy.get("[data-cy='color']").as('color')
    cy.get("[data-cy='file']").as('file')
    cy.get("[data-cy='range']").as('range')
    cy.get("[data-cy='select']").as('select')
    cy.get("[data-cy='textarea']").as('textarea')
    cy.get("[data-cy='checkbox1']").as('checkbox1')
    cy.get("[data-cy='checkbox2']").as('checkbox2')
    cy.get("[data-cy='radio1']").as('radio1')
    cy.get("[data-cy='radio2']").as('radio2')
    cy.get("[data-cy='submit']").as('submit')

  })
//Titulo da página
  it('Verifica o titulo da pagina', () => {
    cy.title().should('eq', 'Formulário Completo')
  })
//Input de texto
  const nome = faker.person.firstName();
  it('Verifica o campo Texto', () => {
    cy.get("@text").type(nome, {delay: 0});
    cy.get("@text").should('have.value', nome)
  })
//Input email
  const email = faker.internet.email();
  it('Verifica o campo Email', () => {
    cy.get("@email").type(email, {delay: 0});
    cy.get("@email").should('have.value', email)
  })
//Input senha
  const senha = faker.internet.password();
  it('Verifica o campo Senha', () => {
    cy.get("@password").type(senha, {delay: 0});
    cy.get("@password").should('have.value', senha)
  })
//Input numero
  const numero = faker.number.int({min: 1, max: 100});
  it('Verifica o campo Número', () => {
    cy.get("@number").type(numero, {delay: 0});
    cy.get("@number").should('have.value', numero)
  })
//Input telefone
   const telefone = faker.phone.number();
  it('Verifica o campo Telefone', () => {
    cy.get("@tel").type(telefone, {delay: 0});
    cy.get("@tel").should('have.value', telefone)
  })
//Input Url
  it('Verifica o campo Url', () => {
    cy.get("@url").type('https://www.google.com', {delay: 0});
    cy.get("@url").should('have.value', 'https://www.google.com')
  })
//Input data
  const data = dayjs().format('YYYY-MM-DD' , { locale: 'pt-br' });
  it('Verifica o campo Data', () => {
    cy.get("@date").type(data, {delay: 0});
    cy.get("@date").should('have.value', data)
  })
//Input Hora
  const horario = dayjs().format('HH:mm');
  it('Verifica o campo Hora', () => {
    cy.get("@time").type(horario, {delay: 0});
    cy.get("@time").should('have.value', horario)
  })
//Input data e hora
  it('Verifica o campo Data e Hora', () => {
    cy.get("@datetime").type(data + 'T' + horario, {delay: 0});
    cy.get("@datetime").should('have.value', data + 'T' + horario)
  })
//Input mes
  const mesAno = dayjs().format('YYYY-MM');
  it('Verifica o campo Mês e Ano', () => {
    cy.get("@month").type(mesAno, {delay: 0});
    cy.get("@month").should('have.value', mesAno)
  })
//Input semana do ano
  const ano = dayjs().year();
  const semanaNumero = dayjs().week();
  const semanaAno = `${ano}-W${semanaNumero.toString().padStart(2, '0')}`;
  it('Verifica o campo Semana do Ano', () => {
    cy.get("@week").type(semanaAno, {delay: 0});
    cy.get('@week').should('have.value', semanaAno)
  })

//Input cor
const cor = faker.internet.color();
  it('Verifica o campo Cor', () => {
    cy.get("@color").type(cor, {delay: 0});
  })

//Input arquivo
it('Faz upload de uma imagem', () => {
  cy.get('input[type="file"]')
    .attachFile('logoBugShield.png')
    .should('have.value', 'C:\\fakepath\\logoBugShield.png');
});

//Input range
  it('Verifica o campo Range', () => {
    cy.get("@range").invoke('val', 100).trigger('change');
    cy.get("@range").should('have.value', 100)
  })

//Input select
  it('Verifica o campo Select1', () => {
    cy.get('@select').select('Opção 1').should('have.value', 'opcao1')
  })

  it('Verifica o campo Select2', () => {
    cy.get('@select').select('Opção 2').should('have.value', 'opcao2')
  })

  it('Verifica o campo Select3', () => {
    cy.get('@select').select('Opção 3').should('have.value', 'opcao3')
  })

//Input textarea
  const texto = faker.lorem.paragraph();
  it('Verifica o campo Textarea', () => {
    cy.get("@textarea").type(texto, {delay: 0});
    cy.get("@textarea").should('have.value', texto)
  })

//Input checkbox
  it('Verifica o campo Checkbox1', () => {
    cy.get("@checkbox1").check().should('be.checked')
  })

  it('Verifica o campo Checkbox2', () => {
    cy.get("@checkbox2").check().should('be.checked')
  })

//Input radio
  it('Verifica o campo Radio1', () => {
    cy.get("@radio1").check().should('be.checked')
  })

  it('Verifica o campo Radio2', () => {
    cy.get("@radio2").check().should('be.checked')
  })

it('Preenche todos os campos e verifica limpeza após submit', () => {
  cy.get("@text").type(nome, { delay: 0 }).should('have.value', nome);
  cy.get("@email").type(email, { delay: 0 }).should('have.value', email);
  cy.get("@password").type(senha, { delay: 0 }).should('have.value', senha);
  cy.get("@number").type(numero, { delay: 0 }).should('have.value', numero);
  cy.get("@tel").type(telefone, { delay: 0 }).should('have.value', telefone);
  cy.get("@url").type('https://www.google.com', { delay: 0 }).should('have.value', 'https://www.google.com');
  cy.get("@date").type(data, { delay: 0 }).should('have.value', data);
  cy.get("@time").type(horario, { delay: 0 }).should('have.value', horario);
  cy.get("@datetime").type(data + 'T' + horario, { delay: 0 }).should('have.value', data + 'T' + horario);
  cy.get("@month").type(mesAno, { delay: 0 }).should('have.value', mesAno);
  cy.get("@week").type(semanaAno, { delay: 0 }).should('have.value', semanaAno);
  cy.get("@color").type(cor, { delay: 0 });
  cy.get('input[type="file"]').attachFile('logoBugShield.png');
  cy.get("@range").invoke('val', 100).trigger('change').should('have.value', '100');
  cy.get('@select').select('Opção 1').should('have.value', 'opcao1');
  cy.get("@textarea").type(texto, { delay: 0 }).should('have.value', texto);
  cy.get("@checkbox1").check().should('be.checked');
  cy.get("@checkbox2").check().should('be.checked');
  cy.get("@radio1").check().should('be.checked');
  cy.get("@radio2").check().should('be.checked');
  cy.get("@submit").click();
  // Verifica se os campos foram limpos após o submit
  cy.get("@text").should('have.value', '');
  cy.get("@email").should('have.value', '');
  cy.get("@password").should('have.value', '');
  cy.get("@number").should('have.value', '');
  cy.get("@tel").should('have.value', '');
  cy.get("@url").should('have.value', '');
  cy.get("@date").should('have.value', '');
  cy.get("@time").should('have.value', '');
  cy.get("@datetime").should('have.value', '');
  cy.get("@month").should('have.value', '');
  cy.get("@week").should('have.value', '');
  cy.get("@color").should('have.value', '#3b82f6');
  cy.get('input[type="file"]').should('have.value', '');
  cy.get("@range").should('have.value', '50');
  cy.get('@select').should('have.value', '');
  cy.get("@textarea").should('have.value', '');
  cy.get("@checkbox1").should('not.be.checked');
  cy.get("@checkbox2").should('not.be.checked');
  cy.get("@radio1").should('not.be.checked');
  cy.get("@radio2").should('not.be.checked');
});

})