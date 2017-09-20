module.exports = {
    "It shows all questions": function(browser) {
      browser
        .url("http://localhost:8080/")
        .waitForElementVisible("h1", 1000)
        .assert.containsText("h1", "Exit Ticketer")
        
        .end()
    }
}
