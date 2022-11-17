const { response } = require("express");
const express = require("express")
const budget_app = express()
const budget_data = require("/Users/Mzmz12/Documents/Unit_8_MaxB/Day_2/budgtr_HW_Lab/model/budget.js");
const { isObject } = require("util");
const { request } = require("http");
const port = 3004;

/*
- Index
+ GET /budgets

- Show
+ GET /budgets/:index

- New
+ GET /budgets/new

- Create
+ POST /budgets
*/

budget_app.use("/static", express.static("public"))
budget_app.use(express.urlencoded({ extended: true }))


// opening route
budget_app.get("/", (request, response) => {
    response.send("Hello World")
})
// data route
budget_app.get("/budget_Data", (request, response) => {
    response.send(budget_data)
})
// Indexing route
budget_app.get("/budgets", (request, response) => {
    // response.send(budget_data)
    response.render("budget_index.ejs", {budget: budget_data})
})
// NEW route: Get route
budget_app.get("/budgets/new", (request, response)=> {
    //response.send(drinks[request.params.id])
    response.render("new.ejs", {budget: budget_data})
})
// Show Route
budget_app.get("/budgets/:id", (request, response)=> {
    //response.send(drinks[request.params.id])
    response.render("budget_show.ejs", {budget: budget_data[request.params.id]})
})

// CREATE: POST /budgets
budget_app.post("/budgets", (req, res) => {
    budget_data.push(request.body)
    response.redirect("/budgets")
})

budget_app.listen(port, (request, response)=>{
    console.log(`listening to port ${port}`)
    })