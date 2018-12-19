// /*global contract, config, it, assert*/
const TestUtils = require("../utils/testUtils");

const License = embark.require('Embark/contracts/License');
const Escrow = embark.require('Embark/contracts/Escrow');
const EscrowV2 = embark.require('Embark/contracts/EscrowV2');
const EscrowFactory = embark.require('Embark/contracts/EscrowFactory');

let accounts;

config({
  contracts: {
    License: {
      args: ["0x0", 1]
    },
    "Escrow": {
      args: ["$License"]
    },
    "EscrowV2": {
      args: ["$License"]
    },
    "EscrowFactory": {
      args: ["$Escrow"]
    }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts;
});

contract("Upgradable Escrow", function () {
  let receipt;

  this.timeout(0);

  it("Contract should be upgradable", async () => {
    // Creating a escrow instance
    receipt = await EscrowFactory.methods.create(License.options.address).send();

    const instanceAddress = receipt.events.InstanceCreated.returnValues.instance;

    // Escrow v1
    Escrow.options.address = instanceAddress;

    // Update to v2
    receipt = await Escrow.methods.updateProxied(EscrowV2.options.address).send();

    // Escrow v2
    EscrowV2.options.address = instanceAddress;

    console.log(await EscrowV2.methods.SetNewVariable(true).send());

    console.log(await EscrowV2.methods.GetNewVariable().call());

  });

  
});
