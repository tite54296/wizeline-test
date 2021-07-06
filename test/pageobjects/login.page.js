import Page from './page';

class Login extends Page {
    loginUser(email, password) {
        $('[name=login.username]').setValue(email);
        $('[name=login.password]').setValue(password);
        $('.button-login').click();
    }
}

export default new Login();
