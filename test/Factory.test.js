const { expect } = require('chai');
const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

describe('Contract', () => {
  beforeEach(async () => {
    Child = await ethers.getContractFactory("Child");
    Factory = await ethers.getContractFactory("Factory"); 

    [owner, workingUser, user1, user2] = await ethers.getSigners();

    child = await Child.deploy();
    factory = await Factory.deploy(child.address);
  });

  describe("createChild",async () => {
    it("should create a new child", async () => {
      await factory.createChild(1, user1.address);
      await factory.createChild(2, owner.address);
      await factory.createChild(3, owner.address);
      const children = await factory.getChildren();
      // console.log(children);
      const child1 = await Child.attach(children[0]);
      const child2 = await Child.attach(children[1]);
      const child3 = await Child.attach(children[2]);

      const child1Data = await child1.data();
      const child2Data = await child2.data();
      const child3Data = await child3.data();

      expect(children.length).to.equal(3, 'Invalid length');
      expect(child1Data).to.equal(1, 'Invalid data');
      expect(child2Data).to.equal(2, 'Invalid data');
      expect(child3Data).to.equal(3, 'Invalid data');

      console.log((await child3.index()));

      console.log("factory", factory.address);
      console.log("child", child.address);
    
      console.log((await child3.owner()));

      const child3Owner = await child3.owner();
      expect(child3Owner).to.equal(owner.address, 'Invalid owner address');
    })
  })
});
