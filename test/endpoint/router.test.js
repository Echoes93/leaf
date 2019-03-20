const supertest = require("supertest");
const createApp = require("../../lib/app");

describe("GET /healthz", () => {
  const url = "/healthz";
  const request = supertest(createApp());

  it("returns 200 ok", () => {
    const expected = "ok";
    
    request
      .get(url)
      .expect(200)
      .then(({ body }) => expect(body).toBe(expected));
  });
});

describe("End middleware", () => {
  const url = "/definitely-not-existing-url";
  const request = supertest(createApp());

  it("handles any unmapped request", () => {
    const expected = "Not found";

    request
      .post(url)
      .expect(404)
      .then(({ body }) => expect(body).toBe(expected));
  });
});