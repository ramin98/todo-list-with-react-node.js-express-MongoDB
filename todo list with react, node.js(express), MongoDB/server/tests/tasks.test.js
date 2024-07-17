const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Task = require("../models/Task");

mongoose
  .connect("mongodb://127.0.0.1:27017/tasks")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

describe("Task API", () => {
  it("all tasks", async () => {
    expect(Array.isArray(await Task.find())).toBeTruthy();
  });

  it("add task", async () => {
    const task = new Task({
      text: "Test",
    });

    const savedTask = await task.save();
    expect(savedTask).toHaveProperty("text", "Test");
  });
});
