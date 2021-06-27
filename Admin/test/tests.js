const { should } = require("chai");
const chaiHttp = require("chai-http")
let chai = require("chai");
let server = require("../admin");

chai.use(chaiHttp);
chai.should();

describe("Tasks API", () => {
    describe("GET /admins", () => {
        it("it should get all the tasks", (done) => {
            chai.request(server)
                .get("/admins")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.length.should.be.eq(3);
                    done();
                })
        })
    })
    describe('GET /admins/:id', () => {
        it("it should get by id", (done) => {
            const taskId = "60cdf95a84c91818d8df63c2"
            chai.request(server)
                .get('/admins' + taskId)
                .end((err, response) => {
                    response.body.should.be.a('object');
                    done();
                })
        })
    })
})
describe('POST /admins/:id', () => {
    it("it should POST a new admins by id", (done) => {
        const task1 = {
            ServiceName: "Special Done"
        }
        chai.request(server)
            .post('/admins')
            .send(task1)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                // response.body.should.have.property("id");
                done();
            })
    })
})

//Test the put route
    describe('PUT /admins/:id', () => {
        it("it should PUT a new service by id", (done) => {
            const taskId = "60cdf4f26c9c461e80a6bbe4";
            const task = {
                ServiceName: "admin"
            }
            chai.request(server)
                .put('/admins/' + taskId)
                .send(task)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    // res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('ServiceName').eq("admin");
                    // res.body.should.have.property('LastName').eq("deva");
                    // res.body.should.have.property('Phone').eq(8485033470);
                    // res.body.should.have.property('Ratings').eq(4);
                    done();
                })
        })
    })
 //Test the DELETE route
        describe('DELETE /admins/:id', () => {
            it("it should DELETE a new service by id", (done) => {
                const taskId = "60cdf95a84c91818d8df63c2";
                chai.request(server)
                    .delete('/admins/' + taskId)
                    .end((err, response) => {
                        response.should.have.status(200);
                        done();
                    })
            })
        })

