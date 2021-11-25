# Contributing Guide

Thanks for that you are interested in contributing to Farrow Doc website.

## Developing

To develop locally:

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your
   own GitHub account and then
   [clone](https://help.github.com/articles/cloning-a-repository/) it to your
   local.
2. Create a new branch:

   ```zsh
   git checkout -b MY_BRANCH_NAME
   ```

3. Install yarn:

   ```zsh
   npm install -g yarn
   ```

4. Install the dependencies with:

   ```zsh
   yarn
   ```

5. Go into `docs` which you want to contribute.

   ```zsh
   cd ./docs/*
   ```

6. Start developing.

   ```zsh
   yarn start
   ```

## Building

You can build website with

```zsh
yarn build
```

## Deploy

We used the [deployment which the support to the Github Page](https://docusaurus.io/docs/deployment#deploying-to-github-pages). Run

```sh
yarn deploy
```

and then the build output of this project will be committed to branch `release` of [Farrow-DOCS](https://github.com/farrow-js/farrow-docs). And Github Page will deploy to <https://farrow-js.github.io/farrow-docs/>.
