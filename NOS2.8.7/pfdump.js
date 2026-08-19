#!/usr/bin/env node

const DtCyber = require("../automation/DtCyber");

const dtc = new DtCyber();

const tapePath = process.argv.length > 2 ? process.argv[2] : `tapes/pfdump-${new Date().toISOString().replaceAll(':', '')}.tap`;

dtc.connect()
.then(() => dtc.expect([ {re:/Operator> $/} ]))
.then(() => dtc.attachPrinter("LP5xx_C12_E5"))
.then(() => dtc.say(`Mount PFDUMP tape ${tapePath} ...`))
.then(() => dtc.dsd([
  "[UNLOAD,50.",
  "[!"
]))
.then(() => dtc.sleep(3000))
.then(() => dtc.mount(13, 0, 0, tapePath, true))
.then(() => dtc.sleep(3000))
.then(() => dtc.say("Initiate full PFDUMP ..."))
.then(() => dtc.dis([
  "ASSIGN,50,TAPE,LB=KU,F=I,PO=W.",
  "PFDUMP,LO=CES."
], "PFDUMP"))
.then(() => dtc.disconnect())
.then(() => dtc.say("Full PFDUMP complete"))
.then(() => {
  process.exit(0);
})
.catch(err => {
  console.log(err);
  process.exit(1);
});
