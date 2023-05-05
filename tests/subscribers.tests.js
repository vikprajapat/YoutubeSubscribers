const mongoose = require("mongoose");
const { expect } = require("chai");
const { beforeEach, afterEach } = require("mocha");
const request = require("supertest");
const app = require("../app");
require('dotenv').config();

//connect to database berse all test cases
beforeEach(async () => {
      await mongoose.connect("mongodb://0.0.0.0:27017/subscriber")
})

// disconnect to db after all test cases
afterEach(async () => {
      await mongoose.Connection.close();
})
describe("GET /", () => {
      it("should return index.html", async () => {
            const result = await request(app).get("/")
            expect(result.header["context-type"]).toBe("text/html; charset=UTF-8")
      })
})
describe("GET /", () => {
      it("should return an array of subscribers", async () => {
            const result = await request(app).get("/subscribers");
            expect(result.statusCode).toBe(200);
      });
});

describe("GET /subscribers/names", () => {
      it("should return array subscribers names and subscriber channel", async () => {
            const result = await request.agent(app).get("/subscribers/names");
            expect(result.statusCode).toBe(200);
      });
});