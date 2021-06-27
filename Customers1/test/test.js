const { should } = require("chai");
const chaiHttp = require("chai-http")
let chai = require("chai");
let server = require("../main");

chai.use(chaiHttp);
chai.should();

describe("Tasks API", () => {
    describe("GET /customer", () => {
        it("it should get all the tasks", (done) => {
            chai.request(server)
                .get("/customer")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.length.should.be.eq(2);
                    done();
                })
        })
        describe('GET /customer/:id', () => {
            it("it should get by id", (done) => {
                const taskId = "60d1d60eed1812048c41b3de"
                chai.request(server)
                    .get('/customer' + taskId)
                    .end((err, response) => {
                        response.body.should.be.a('object');
                        done();
                    })
            })
        })
    })
})
describe('POST /customer/:id', () => {
    it("it should POST a new customer by id", (done) => {
        const task = {
            name: "Task 4"
        }
        chai.request(server)
            .post('/customer')
            .send(task)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                // response.body.should.have.property("id");
                done();
            })
    })
})

// //Test the put route
    describe('PUT /customer/:id', () => {
    it("it should PUT a new washer by id", (done) => {
        const taskId = "60d1d60eed1812048c41b3de";
        const task = {
            Name: "admin"
        }
        chai.request(server)
            .put('/customer/' + taskId)
            .send(task)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                // res.body.should.be.a('object');
                res.body.should.have.property('_id');
                res.body.should.have.property('Name').eq("admin");
                // res.body.should.have.property('LastName').eq("deva");
                // res.body.should.have.property('Phone').eq(8485033470);
                // res.body.should.have.property('Ratings').eq(4);
                done();
            })
    })
})
//Test the DELETE route
describe('DELETE /customer/:id', () => {
    it("it should DELETE a new washer by id", (done) => {
        const taskId = "60d1d60eed1812048c41b3de";
        chai.request(server)
            .delete('/customer/' + taskId)
            .end((err, response) => {
                response.should.have.status(200);
                done();
            })
    })
})
