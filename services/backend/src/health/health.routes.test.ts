import request from "supertest"

import app from "../app"

describe("health.routes", () => {
  test("/ping endpoint responds properly", async () => {
    const res = await request(app).get("/ping")

    expect(res.text).toEqual('pong')
  })
})
