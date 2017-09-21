module.exports = {
    "It shows all questions": function(browser) {
      browser
        .url("http://localhost:8080/")
        .waitForElementVisible("h1", 1000)
        .assert.containsText("h1", "Exit Ticketer")
        .assert.containsText("li:nth-child(1)", "Describe agile velocity")
        .assert.containsText("li:nth-child(2)", "Explain how you use git to create a feature branch workflow")
        .assert.containsText("li:nth-child(3)", "What is one thing you learned today?")
        .end()
    }
}
