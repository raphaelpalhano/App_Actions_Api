const faker = require("faker");

export default {

   generatorData: function(){
        let randName = faker.name.findName();
        let adress = faker.address.city()
        let company = faker.company.companyName()
        
       const data = {
           name: randName,
           adress: adress,
           company: company,
           email: faker.internet.email(randName)
        } 

        return data;     
    }
    
    
}

