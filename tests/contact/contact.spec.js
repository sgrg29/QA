import { test } from '@playwright/test';
import { LoginPage } from '../../pageObjects/login.po.js';
import { ContactPage } from '../../pageObjects/contact.po.js';
import { authenticateUser, createEntity, getEntity, validateEntity } from '../../utils/helper.spec.js';
//import { access } from 'node:fs';
const testData = require('../../fixtures/loginFixture.json');
const contactTestData = require('../../fixtures/contactFixture.json');
test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('/');
    await login.login(testData.validUser.userName, testData.validUser.password);
    await login.verifyValidLogin();

})
test.describe('Contact testcases', () => {
    test('Contact Add test', async ({ page, request }) => {
        const contact = new ContactPage(page);
        await contact.contactAdd(contactTestData.contact.firstName, contactTestData.contact.lastName, contactTestData.contact.dateOfBirth, contactTestData.contact.email, contactTestData.contact.phone, contactTestData.contact.address, contactTestData.contact.city, contactTestData.contact.state, contactTestData.contact.postal, contactTestData.contact.country);
        await contact.viewContact();
        await contact.validationContactCreated(contactTestData.contact.firstName, contactTestData.contact.lastName, contactTestData.contact.dateOfBirth, contactTestData.contact.email, contactTestData.contact.phone, contactTestData.contact.address, contactTestData.contact.city, contactTestData.contact.state, contactTestData.contact.postal, contactTestData.contact.country);
    });
    test('Contact Edit test', async ({page, request}) =>{
        const Data = {
            "firstName": "John",
            "lastName": "Doe",
            "dateOfBirth": "1990-06-30",
            "email": "johndoe@gmail.com",
            "phone": "9802365475",
            "address": "Address1",
            "city": "City1",
            "state": "State",
            "postal": "12345",
            "country" : "Nepal"    
        };
        const contact = new ContactPage(page);
        const accessToken = await authenticateUser(testData.validUser.userName, testData.validUser.password);
        await createEntity(Data, accessToken, 'contacts', { request });
        await page.reload();
        await contact.viewContact();
        await contact.contactEdit(contactTestData.contactEdit.firstName);
        await contact.validationContactCreated(contactTestData.contactEdit.firstName, contactTestData.contactEdit.password);

    })
    test.only('Contact Delete test', async ({ page, request }) => {
         const Data = {
            "firstName": "John",
            "lastName": "Doe",
            "dateOfBirth": "1990-06-30",
            "email": "johndoe@gmail.com",
            "phone": "9802365475",
            "address": "Address1",
            "city": "City1",
            "state": "State",
            "postal": "12345",
            "country" : "Nepal"    
        };
        const contact = new ContactPage(page);
        const accessToken = await authenticateUser(testData.validUser.userName, testData.validUser.password, { request });
        await createEntity(Data, accessToken, '/contacts', { request });
        await page.reload();
        await contact.viewContact();
        const id = await getEntity(accessToken, '/contacts', '200', { request });
        await contact.contactDelete();
        await validateEntity(accessToken, `/contacts/${id}`, '404', {request });
    })
});

