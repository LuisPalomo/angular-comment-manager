import { AngularCommentManagerPage } from './app.po';

describe('angular-comment-manager App', () => {
  let page: AngularCommentManagerPage;

  beforeEach(() => {
    page = new AngularCommentManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
