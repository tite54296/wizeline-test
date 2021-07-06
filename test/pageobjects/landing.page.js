import Page from './page';

class Landing extends Page {
    get emailContainer() { return $('#welcome-page b:first-child') }
    get passwordContainer() { return $('#welcome-page b:nth-child(2)') }


    openLogin() {
        super.open
        $('.button-login').click();
    };

    getEmailValue() {
        return this.emailContainer.getText();
    };

    getPasswordValue() {
        return this.passwordContainer.getText();
    }
}

export default new Landing();
