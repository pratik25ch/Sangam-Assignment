const HomePage = require("../pages/HomePage");
const EmailPage = require("../pages/EmailPage")


  
  describe("Verify Error message", function () {
    
    it("Starting Application", () => {
      browser.url('/')
  })
    
    it("Click on Lets start", () => {
        HomePage.homeButton().waitForDisplayed(30000).click();
        browser.pause(5000)

     })

    it("Assert on errors", () => {
      expect(HomePage.errorDOB.isDisplayed()).equals(true);
      expect(HomePage.errorCommunity.isDisplayed()).equals(true);
    })
})


describe("Submit basic information for registration and go to email view", function () {

  it("Starting Application", () => {
    browser.url('/')
  })

  it("Fill Basic details ", () => {
    HomePage.profileFor.waitForDisplayed(10000).click();
    HomePage.fillDateOfBirth();
    HomePage.motherTongue.waitForDisplayed(10000).click();
    HomePage.selectMotherTongue.waitForDisplayed(10000).click();
    HomePage.community.waitForDisplayed(10000).click();
    HomePage.selectCommunity.waitForDisplayed(10000).click();

    HomePage.homeButton.waitForDisplayed(10000).click();
    browser.pause(5000)

 })

it("Assert on next email Page", () => {
  EmailPage.email.waitForDisplayed(30000)
  expect(EmailPage.email.isDisplayed()).equals(true);
})


})
  

  