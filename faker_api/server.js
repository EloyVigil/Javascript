const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newFakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.datatype.uuid()
    }
    console.log(newFakeUser);
    return newFakeUser;
}

const createCompany = () => {
    const newFakeCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newFakeCompany;
}

const createFakeUser = createUser();
const createNewFakeCompany = createCompany();
const createNewCompanyAndUser = [createCompany(), createUser()]





// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    res.json( {createFakeUser} );
});

app.get("/api/companies/new", (req, res) => {
    res.json( {createNewFakeCompany} );
});

app.get("/api/user/company", (req, res) => {
    res.json( {createNewCompanyAndUser} );
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );