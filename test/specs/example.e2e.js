const LoginPage = require('../pageobjects/login.page');
const LandingPage = require('../pageobjects/landing.page');
const MyNotesPage = require('../pageobjects/mynotes.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LandingPage.openLogin();

        const email = LandingPage.getEmailValue();
        const password = LandingPage.getPasswordValue();

        LoginPage.login(email, password);
        expect(MyNotesPage.getHeader).toBeExisting();
        expect(MyNotesPage.getHeader).toHaveTextContaining('My Notes');
    });
});


