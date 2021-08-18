Feature('login');

Before(({I}) => {
    I.amOnPage('chrome-extension://edgfeenenidkoidamkeeonclbnaoihoc/home.html#initialize/metametrics-opt-in');
})

Scenario('test something', ({ I }) => {
    // I.amOnPage('/');
    I.wait(2);
});
