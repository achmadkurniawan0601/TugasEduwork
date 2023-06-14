describe('Update User', () => {
    it('Successfully update user', () => {
        var user = {
            "name": "Achmad Kurniawan",
            "job": "QA Learn"
        }

        cy.request("PUT", "https://reqres.in/api/users", user).then((response) => {
            expect(response.status).equal(200);
            expect(response.body.name).to.equal(user.name)
            expect(response.body.job).to.equal(user.job);
        })
    });
})