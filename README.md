# Node TypeScript Box AI Example

## Purpose

Demonstrate the use of the Box AI API with Node.js and TypeScript.

## Prerequisites

You will need Node.js installed on your computer. These instructions were tested with Node v19.9.0.

## How to install and configure the repo

```
npm install
```

You will need to download a Box JWT config file for your Box test account and save it to `src/myconfig.boxconfig.json`. You can get this file from the Box Developer Console. 


## How to run example script

```
npm start <DEVELOPER KEY> <USER ID TO IMPERSONATE> <AI MODE> <FILE ID>
```

Where:
* `<DEVELOPER KEY>` is a Box Developer key.
* `<USER ID TO IMPERSONTATE>` is a Box User ID with access to `<FILE ID>`
* `<AI MODE>` is either `single_item_qa` or `text_gen`
* `<FILE ID>` is the File ID in Box of the file to run the API on

## How to update prompt

Update line 2 of `index.ts` (modify `const PROMPT = 'what is the purpose?'`).

## How to run all tests

```
npm test
```

## TODO:

* ~~Add all endpoints~~ 
* Add OCliff?
* ~~Update README.md~~
* Finish tests
* Add support for OAuth (v2)
* Add support for JWT (v2)
