const { should } = require("chai");
const chaiHttp = require("chai-http")
let chai = require("chai");
let server = require("../admin");

chai.use(chaiHttp);
chai.should();

describe("Tasks API", () => {
    describe("GET /addon", () => {
        it("it should get all the addons", (done) => {
            chai.request(server)
                .get("/addon")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.length.should.be.eq(3);
                    done();
                })
        })
    })
    describe('GET /addon/:id', () => {
        it("it should get all addon by id", (done) => {
            const taskId = "60d5a6492befe0435411c0f2"
            chai.request(server)
                .get('/addon' + taskId)
                .end((err, response) => {
                    response.body.should.be.a('object');
                    done();
                })
        })
    })
})
describe('POST /addon/:id', () => {
    it("it should POST a new addon by id", (done) => {
        const task = {
            ServiceName: "David"
        }
        chai.request(server)
            .post('/addon')
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
    describe('PUT /addon/:id', () => {
        it("it should PUT a new addon by id", (done) => {
            const taskId = "60d5a66c2befe0435411c0f4";
            const task1 = {
                name: "add1"
            }
            chai.request(server)
                .put('/addon/' + taskId)
                .send(task1)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    // res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('name').eq("add1");
                    // res.body.should.have.property('LastName').eq("deva");
                    // res.body.should.have.property('Phone').eq(8485033470);
                    // res.body.should.have.property('Ratings').eq(4);
                    done();
                })
        })
    })
 //Test the DELETE route
 describe('DELETE /addon/:id', () => {
    it("it should DELETE a new addon by id", (done) => {
        const taskId = "60d5a6492befe0435411c0f2";
        chai.request(server)
            .delete('/addon/' + taskId)
            .end((err, response) => {
                response.should.have.status(200);
                done();
            })
    })
})

