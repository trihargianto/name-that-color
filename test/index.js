const test = require("tape");
const tapSpec = require("tap-spec");
const ntc = require("../src/index");

// make tape output look pretty
test.createStream().pipe(tapSpec()).pipe(process.stdout);

test("ntc test", function (t) {
  t.plan(1);
  t.ok(ntc, "ntc exists and is defined");
});

test("able to convert hex to color name", function (t) {
  t.plan(2);
  t.equal(ntc.name("#35312C")[1], "Acadia");
  t.equal(ntc.name("#35312C")[3], "Brown");
});
