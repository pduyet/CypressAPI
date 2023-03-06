import * as constant from "../support/constants"

describe("test api", () => {
    it("", () => {
        const url = `https://${constant.AppAPI.endPoint}${constant.ApiPath.project}`;
        cy.log(url)
    })
})