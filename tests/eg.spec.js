import { test, expect } from '@playwright/test';
test.beforeEach(async({page})=>{
    await page.goto('/');
})
/*test("opening browser", async({page})=>{
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/')
    await page.locator('//input[@id="email"]').fill("sgrg31@gmail.com")
    await page.getByPlaceholder('Password').fill("Monkey@123")
    await page.getByText('Submit').click()
    await expect(page.getByText('Logout')).toBeVisible();
})*/

//tagname[@attribute='attributevalue']
//input[@id="email"] for relative path


//import { test, expect } from '@playwright/test';

// test("opening browser", async({page})=>{
//     await page.goto('https://thinking-tester-contact-list.herokuapp.com/')
//     await expect(page).toHaveTitle('Instagram')
// })

// test("Valid Login", async({page})=>{
//     await page.goto('https://thinking-tester-contact-list.herokuapp.com/')
//     await page.getByPlaceholder('Email').fill('sgrg31@gmail.com')
//     await page.getByPlaceholder('Password').fill('')
//     await page.getByText('Submit').click();

//     await expect(page.getByText('Logout')).toBeVisible();
// })

// test("Invalid Login with invalid password",async({page})=>{
//     await page.goto('https://thinking-tester-contact-list.herokuapp.com/')
//     // await page.getByPlaceholder('Email').fill('sgrg31@gmail.com')
//     await page.locator('//input[@id="email"]').fill('sgrg31@gmail.com')
//     await page.getByPlaceholder('Password').fill('12345')
//     await page.getByText('Submit').click();
//     await expect(page.getByText('Logout')).toBeVisible();
// })

// test("Invalid Login with invalid email",async({page})=>{
//     await page.goto('https://thinking-tester-contact-list.herokuapp.com/')
//     await page.getByPlaceholder('Email').fill('sgrg3@gmail.com')
//     await page.getByPlaceholder('Password').fill('Monkey@123')
//     await page.getByText('Submit').click();
//     await expect(page.getByText('Logout')).toBeVisible();
// })

// test("Invalid Login with invalid input",async({page})=>{
//     await page.goto('https://thinking-tester-contact-list.herokuapp.com/')
//     await page.getByPlaceholder('Email').fill('sgrg2@gmail.com')
//     await page.getByPlaceholder('Password').fill('12345')
//     await page.getByText('Submit').click();
//     await expect(page.getByText('Logout')).toBeVisible();
// })

// test("Invalid Login with empty email and password",async({page})=>{
//     await page.goto('https://thinking-tester-contact-list.herokuapp.com/')
//     await page.getByPlaceholder('Email').fill('')
//     await page.getByPlaceholder('Password').fill('')
//     await page.getByText('Submit').click();
//     await expect(page.getByText('Logout')).toBeVisible();
// })

test("Invalid login",async({page})=>{
    //await page.goto('https://thinking-tester-contact-list.herokuapp.com/')
    await page.locator('//input[@id="email"]//following::input').fill('123')
    //await page.getByPlaceholder('Password').fill('12345')
    await page.getByText('Submit').click();
    await expect(page.getByText('Logout')).toBeVisible();
})