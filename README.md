# TypeScript / Redux-saga / Redux-wrapper Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript / Redux-saga / Redux-wrapper.

## How to use it?

```bash
git clone https://github.com/evelas/template_NextJs.git

cd template_NextJs

npm install
# or
yarn

yarn dev
# or
npm run dev
```

## Notes

This example shows how to integrate the TypeScript / Redux-wrapper / Redux-saga type system into Next.js.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
