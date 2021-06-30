const { should } = require("chai");
const chaiHttp = require("chai-http")
let chai = require("chai");
let server = require("../admin");

chai.use(chaiHttp);
chai.should();

describe("Tasks API", () => {
    describe("GET /adminp", () => {
        it("it should get all the tasks", (done) => {
            chai.request(server)
                .get("/adminp")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.length.should.be.eq(4);
                    done();
                })
        })
    })
})
    describe('GET /adminp/:id', () => {
        it("it should get promo by id", (done) => {
            const taskId = "60cf5149f3c5403120d32750"
            chai.request(server)
                .get('/adminp' + taskId)
                .end((err, response) => {
                    response.body.should.be.a('object');
                    done();
                })
        })
    })

    describe('POST /adminp/:id', () => {
        it("it should POST a new promo by id", (done) => {
            const task = {
                Name: "promo"
            }
            chai.request(server)
                .post('/adminp')
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
        describe('PUT /adminp/:id', () => {
            it("it should PUT a new promo by id", (done) => {
                const taskId = "60d5ccbaacfe73365c5efeb0";
                const task = {
                    Name: "high"
                }
                chai.request(server)
                    .put('/adminp/' + taskId)
                    .send(task)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        // res.body.should.be.a('object');
                        res.body.should.have.property('_id');
                        res.body.should.have.property('Name').eq("high");
                        // res.body.should.have.property('LastName').eq("deva");
                        // res.body.should.have.property('Phone').eq(8485033470);
                        // res.body.should.have.property('Ratings').eq(4);
                        done();
                    })
            })
        })
//  //Test the DELETE route
        describe('DELETE /adminp/:id', () => {
            it("it should DELETE a new promo by id", (done) => {
                const taskId = "60cf53bef3c5403120d32752";
                chai.request(server)
                    .delete('/adminp/' + taskId)
                    .end((err, response) => {
                        response.should.have.status(200);
                        done();
                    })
            })
        })

