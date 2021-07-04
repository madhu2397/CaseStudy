const { should } = require("chai");
const chaiHttp = require("chai-http")
let chai = require("chai");
let server = require("../wash");

chai.use(chaiHttp);
chai.should();

describe("Tasks API", () => {
    describe("GET /wash", () => {
        it("it should get all the tasks", (done) => {
            chai.request(server)
                .get("/wash")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.length.should.be.eq(11);
                    done();
                })
        })
    })
    describe('GET /wash/:id', () => {
        it("it should get by id", (done) => {
            const taskId = "60d1dcfc5fe8f024d8dc6b1a"
            chai.request(server)
                .get('/wash' + taskId)
                .end((err, response) => {
                    response.body.should.be.a('object');
                    done();
                })
        })
    })

    describe('POST /wash/:id', () => {
        it("it should POST a new washer by id", (done) => {
            const task = {
                name: "Task 4",
                completed: false
            }
            chai.request(server)
                .post('/wash')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    // response.body.should.have.property("id");
                    done();
                })
        })
    })

//Test the put route
    describe('PUT /wash/:id', () => {
        it("it should PUT a new washer by id", (done) => {
            const taskId = "60d1da772312d04f305dd5ea";
            const task = {
                FirstName: "admin"
            }
            chai.request(server)
                .put('/wash/' + taskId)
                .send(task)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    // res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('FirstName').eq("admin");
                    // res.body.should.have.property('LastName').eq("deva");
                    // res.body.should.have.property('Phone').eq(8485033470);
                    // res.body.should.have.property('Ratings').eq(4);
                    done();
                })
        })
    })
})

    //Test the DELETE route
        describe('DELETE /wash/:id', () => {
            it("it should DELETE a new washer by id", (done) => {
                const taskId = "60d2cd64ebc55b3d70ffae6e";
                chai.request(server)
                    .delete('/wash/' + taskId)
                    .end((err, response) => {
                        response.should.have.status(200);
                        done();
                    })
            })
        })
    



