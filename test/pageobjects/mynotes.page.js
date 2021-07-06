import Page from './page';

class MyNotes extends Page {
    getHeader() {
        $('#my-notes-page').getText();
    }
}

export default new MyNotes();
