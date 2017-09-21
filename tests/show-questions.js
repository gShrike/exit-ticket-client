module.exports = {
    "It shows all questions": function(browser) {
      browser
        .url("http://localhost:8080/")
        .waitForElementVisible("h1", 1000)
        .assert.containsText("h1", "Exit Ticketer")
        .waitForElementVisible("ol", 1000)
        .waitForElementVisible("li", 6000)
        .assert.containsText("li", "Describe agile velocity")
        .assert.containsText("li", "Explain how you use git to create a feature branch workflow")
        .assert.containsText("li", "What is one thing you learned today?")
        .end()
    }
}
