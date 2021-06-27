const { should } = require("chai");
const chaiHttp = require("chai-http")
let chai = require("chai");
let server = require("../admin");

chai.use(chaiHttp);
chai.should();

describe("Tasks API", () => {
    describe("GET /create", () => {
        it("it should get all the admins", (done) => {
            chai.request(server)
                .get("/create")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.length.should.be.eq(4);
                    done();
                })
        })
    })
    describe('GET /create/:id', () => {
        it("it should get admin by id", (done) => {
            const taskId = "60d5a38b38a6511240bf8602"
            chai.request(server)
                .get('/create' + taskId)
                .end((err, response) => {
                    response.body.should.be.a('object');
                    done();
                })
        })
    })
})
describe('POST /create/:id', () => {
    it("it should POST a new admin by id", (done) => {
        const task = {
            ServiceName: "alvo"
        }
        chai.request(server)
            .post('/create')
            .send(task)
            .end((err, response) => {
                response.should.have.status(200)
                response.body.should.be.a('object');
                // response.body.should.have.property("id");
                done();
            })
    })

    // })

    //Test the put route
    describe('PUT /create/:id', () => {
        it("it should PUT a new admin by id", (done) => {
            const taskId = "60d5a47a38a6511240bf860c";
            const task = {
                Name: "Adhoc"
            }
            chai.request(server)
                .put('/create/' + taskId)
                .send(task)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    // res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('Name').eq("Adhoc");
                    // res.body.should.have.property('LastName').eq("deva");
                    // res.body.should.have.property('Phone').eq(8485033470);
                    // res.body.should.have.property('Ratings').eq(4);
                    done();
                })
        })
    })
    //Test the DELETE route
    describe('DELETE /create/:id', () => {
        it("it should DELETE a addon by id", (done) => {
            const taskId = "60d5a45938a6511240bf860a";
            chai.request(server)
                .delete('/create/' + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                })
        })
    })

})