import { app, server } from "../../src/index";
import request from "supertest";

describe("ping route", () => {
  afterEach(async () => {
    server.close();
  });

  it("should return pong", async () => {
    const resp = await request(app).get("/api/ping");
    expect(resp.status).toBe(200);
    expect(resp.text).toBe("pong");
  });
});
