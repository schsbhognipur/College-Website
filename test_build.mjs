import { build } from 'vite';
async function test() {
  try {
    await build();
    console.log("SUCCESS");
  } catch(e) {
    if (e.errors) console.log(JSON.stringify(e.errors, null, 2));
    if (e.frame) console.log(e.frame);
    if (e.loc) console.log(e.loc);
    console.log(e.message);
  }
}
test();
