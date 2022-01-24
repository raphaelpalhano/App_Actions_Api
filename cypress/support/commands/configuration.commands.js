Cypress.Commands.add('generateFixture', () => {
    const faker = require('faker')
  
    const data = {
      title: faker.lorem.words(5),
      name: faker.name
    }

    return data
  })