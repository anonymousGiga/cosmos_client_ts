import {
  newActor,
  getPublicKey,
  setVerifier,
  resetVerifier,
  verifyHeader,
} from "./icp";
import { header, now } from "./mock";

async function main() {
  const actor = await newActor();
  // await setVerifier(actor);
  await resetVerifier(actor);
  await getPublicKey(actor);
  const sig = await verifyHeader(actor, header, now);
  console.log("sig: ", sig);
}
main();
