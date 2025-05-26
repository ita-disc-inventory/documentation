# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

Note: When prompted for a password, you must use a GitHub Personal Access Token (PAT) with `repo` (or `public_repo`) permissions, not your GitHub account password. Alternatively, you can set the `GIT_PASS` environment variable to your PAT: `GIT_USER=<Your GitHub username> GIT_PASS=<Your PAT> yarn deploy`.


If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
