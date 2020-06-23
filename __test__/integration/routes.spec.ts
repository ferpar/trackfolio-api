import { app, server } from "../../src/index";
import request from "supertest";

describe("ping route", () => {
  afterEach(async () => {
    server.close();
  });

  it('should return online:true at /api', async () => {
      const resp = await request(app).get("/api")
      expect(resp.status).toBe(200)
      expect(resp.body).toEqual({ online: true })
  })

  it("should return pong", async () => {
    const resp = await request(app).get("/api/ping");
    expect(resp.status).toBe(200);
    expect(resp.text).toBe("pong");
  });
});
