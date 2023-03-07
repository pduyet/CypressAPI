import * as constant from "../support/constants";
const url = `https://${constant.AppAPI.endPoint}${constant.AppAPI.v2Api}${constant.ApiPath.pet}`;
let petId: number;

describe("Test POST request", () => {
  it('Create a pet', () => {
    let header = {
      'Content-type': 'application/json; charset=UTF-8',
    }

    let body = {
      "id": 34,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "trang",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    }

    let requestObject = {
      url: url,
      method: 'POST',
      headers: header,
      body: body
    }

    cy.request(requestObject).then(res => {
      return cy.log(JSON.stringify(res));
    })
    petId = body.id;
  });
})

describe("Test GET request", () => {
  it("GET pet have already created ", () => {
    cy.request({
      url: url + "/" + petId,
      method: "GET",
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.id).to.eq(petId)
    });
  });
});


describe("Test PUT request", () => {
  it('Update a pet', () => {
    let header = {
      'Content-type': 'application/json; charset=UTF-8',
    }

    let body = {
      "id": 34,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "duyet",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    }

    let requestObject = {
      url: url,
      method: 'PUT',
      headers: header,
      body: body
    }

    cy.request(requestObject).then(res => {
      return cy.log(JSON.stringify(res));
    })
  });
})

describe("Test DELETE request", () => {
  it("Delete a pet ", () => {
    cy.request({
      url: url + "/" + petId,
      method: "DELETE",
    }).then((response) => {
      expect(response.status).to.equal(200)
    });
  });
});

describe("Test GET request", () => {
  it("GET pet have already deleted", () => {
    cy.request({
      url: url + "/" + petId,
      method: "GET",
      failOnStatusCode: false
    }).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.equal(404)
      expect(response.body.message).to.eq("Pet not found")
    });
  });
});