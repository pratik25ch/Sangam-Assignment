class EmailPage{

    get email() { return $("//android.widget.EditText[@resource-id='email']")};

}
module.exports = new EmailPage()