import fetch from "isomorphic-fetch";
import { Actor, HttpAgent, Identity } from "@dfinity/agent";
import { Ed25519KeyIdentity } from "@dfinity/identity";
import { idlFactory } from "./factory/idl";
import { _SERVICE as Service } from "./factory/idl.d";

const host = "http://127.0.0.1:4943";
const canisterId = "xta5m-jiaaa-aaaaa-aaawa-cai";
const aliceIdentity = Ed25519KeyIdentity.generate();

const createActor = async (identity: Identity): Promise<Service> => {
  const agent = new HttpAgent({ host, fetch, identity });

  const actor = Actor.createActor<Service>(idlFactory, {
    canisterId: canisterId,
    agent,
  });

  await agent.fetchRootKey().catch((err) => {
    console.error(
      "Unable to fetch root key. Check to ensure that your local replica is running"
    );
    throw err;
  });

  return actor;
};

export async function newActor(): Promise<Service> {
  const aliceActor = await createActor(aliceIdentity);
  return aliceActor;
}
export async function setVerifier(actor: Service) {
  const ret = await actor.set_verifier();
  console.log("after set verifier: ", ret);
}

export async function resetVerifier(actor: Service) {
  const ret = await actor.reset_verifier();
  console.log("after reset verifier: ", ret);
}

export async function getPublicKey(
  actor: Service
): Promise<number[] | undefined> {
  const result = await actor.public_key();
  console.log("public key: ", result);
  return (result as any).Ok.public_key;
}

export async function verifyHeader(
  actor: Service,
  data: string,
  now: string
): Promise<string | undefined> {
  const ret = await actor.verify_header(data, now);
  console.log("after verify header: ", ret);
  return (ret as any).Ok;;
}
