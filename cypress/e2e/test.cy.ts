import * as constant from "../support/constants";

describe("test api", () => {
  it("", () => {
    const url = `https://${constant.AppAPI.endPoint}${constant.ApiPath.posts}`;
    cy.request({
      url: url,
      method: "GET",
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.length).to.equal(100)
    });
  });
});
