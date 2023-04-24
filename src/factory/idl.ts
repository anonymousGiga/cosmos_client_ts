// @ts-nocheck
export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'public_key' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Record({ 'public_key_hex' : IDL.Text }),
            'Err' : IDL.Text,
          }),
        ],
        [],
      ),
    'reset_verifier' : IDL.Func(
        [],
        [IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text })],
        [],
      ),
    'set_verifier' : IDL.Func(
        [],
        [IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text })],
        [],
      ),
    'sign' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({ 'signature_hex' : IDL.Text }),
            'Err' : IDL.Text,
          }),
        ],
        [],
      ),
    'verify' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({ 'is_signature_valid' : IDL.Bool }),
            'Err' : IDL.Text,
          }),
        ],
        [],
      ),
    'verify_header' : IDL.Func(
        [IDL.Text, IDL.Text],
        [IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text })],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };