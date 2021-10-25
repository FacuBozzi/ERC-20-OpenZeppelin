const Wolfgang = artifacts.require("Wolfgang");

contract("Wolfgang", (accounts) => {
    before(async () =>{
        wolfgang = await Wolfgang.deployed();
    })

    it("Gives the owner of the token 1m tokens", async () =>{
        let balance = await wolfgang.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, 1000000, "The owner should have 1m tokens")
    })

    it("Can transfer tokens between accounts", async () =>{
        let amount = web3.utils.toWei('1000', 'ether')
        await wolfgang.transfer(accounts[1], amount, {from: accounts[0]})
        let balance = await wolfgang.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, 1000, "The owner should have 1k tokens")
    })

})