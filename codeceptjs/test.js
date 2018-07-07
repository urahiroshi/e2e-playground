Feature('Getting Started')

Scenario('My first test', I => {
  I.amOnPage('http://devexpress.github.io/testcafe/example/')
  I.fillField('#developer-name', 'John Smith');
  I.scrollTo('#submit-button');
  I.click('#submit-button');
  I.see('Thank you, John Smith!', '#article-header');
});
