// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');
 
// heredem una classe amb un sol mètode test()
// emprem this.driver per utilitzar Selenium
 
class MyTest extends BaseTest
{
	async test() {
        // testejem H1 a la home page
        //////////////////////////////////////////////////////
        var site = process.env.URL
        await this.driver.get(site+"/admin/login/")
        var currentText = await this.driver.findElement(By.tagName("h1")).getText();
        var expectedText = "Tasklist";
        assert( currentText==expectedText, "Títol H1 de la pàgina principal incorrecte");
 
        console.log("TEST OK");
	}
}
 
// executem el test
 
(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();
