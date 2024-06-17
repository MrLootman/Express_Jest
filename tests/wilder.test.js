const request = require("supertest");
const app = require('../index');

/* La combinaison des dépendances Jest et Supertest vont nous permettre de tester
nos routes backend, les valeurs de retours, les status HTTP... 
Nous utilisons la commande npm run test pour que Jest exécute le fichier wilder.test.js.
*/

describe("Test route GET /api/wilder", () => {
  test("it should respond with status 200", done => {
    request(app)
      .get("/api/wilder")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("it should respond with an object", done => {
    request(app)
      .get("/api/wilder")
      .then(response => {
        expect(typeof response.body).toBe("object");
        done();
      });
  });

  test("it should respond with 4 elements inside the array", done => {
    request(app)
      .get("/api/wilder")
      .then(response => {
        expect(response.body).toHaveLength(4);
        done();
      });
  });

  test("it should contain the name Lucas", done => {
    request(app)
      .get("/api/wilder")
      .then(response => {
        expect(response.body[1].name).toEqual("Lucas");
        done();
      });
  });
});