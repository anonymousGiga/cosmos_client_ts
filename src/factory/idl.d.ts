import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'public_key' : ActorMethod<
    [],
    { 'Ok' : { 'public_key_hex' : string } } |
      { 'Err' : string }
  >,
  'reset_verifier' : ActorMethod<[], { 'Ok' : null } | { 'Err' : string }>,
  'set_verifier' : ActorMethod<[], { 'Ok' : null } | { 'Err' : string }>,
  'sign' : ActorMethod<
    [string],
    { 'Ok' : { 'signature_hex' : string } } |
      { 'Err' : string }
  >,
  'verify' : ActorMethod<
    [string, string, string],
    { 'Ok' : { 'is_signature_valid' : boolean } } |
      { 'Err' : string }
  >,
  'verify_header' : ActorMethod<
    [string, string],
    { 'Ok' : string } |
      { 'Err' : string }
  >,
}