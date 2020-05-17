class HomePage{

get homeButton() { return $('#homeButton')};

get errorDOB() { return $("//android.view.View[@text='Please specify Date of Birth']")};

get errorCommunity() { return $("//android.widget.Button[contains(@text,'Please specify Caste / Community')]")};

get profileFor() { return $("(//android.widget.Spinner)[2]")};

get motherTongue() { return $("//android.widget.Button[contains(@text,'Mother Tongue'])")};

get selectMotherTongue() { return $("//android.widget.Button[contains(@text,'Marathi')]")};

get community() { return $("//android.widget.Button[contains(@text,'Community')]")};

get selectCommunity() { return $("//android.widget.Button[contains(@text,'Hindu - 96K Kokanastha')]")};

get DOB() { return $("//android.widget.EditText[@resource-id='dob-input']")};

fillDateOfBirth() {
    browser.pause (5000)

    if (this.DOB.isDisplayed() === true) {
        this.DOB.setValue('25081996');
    }
    browser.pause (5000)
}

}