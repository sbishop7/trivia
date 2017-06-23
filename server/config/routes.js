const path = require("path")
const users = require("./../controllers/users.js")
const questions = require("./../controllers/questions.js")
const scores = require("./../controllers/scores.js")

module.exports = (app) => {
		app.post("/login", users.login)
		app.get("/check_status", users.check_status)
		app.get("/logout", users.logout)
		app.post("/add_question", questions.add)
		app.post("/save_score", scores.add)
		app.get("/allscores", scores.all_scores)

    app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}