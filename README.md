# Topcoder-App-R

This repository houses new Topcoder pages, using React, Redux, and Webpack.

## Installation

We use node 5 and npm 3, so you may need to download a new version of node. The easiest way is to download [nvm](https://github.com/creationix/nvm). We have a `.nvmrc` file in the root of the project, so you can just run `nvm use` to switch to the correct version of node.

Install dependencies by running the following in the root of the project:
 - npm install
 - **Note:** You must use npm 3. Type `npm -v` to ensure you have a 3.x version.

## NPM Commands
- To run locally: `npm run dev`
- To create the build: `npm run build`
- To run the test runner and view specs.html: `TODO: need to update`

## Recommended Developer Tools

Syntax highlighting for ES6 and React JSX
- Install [babel](https://packagecontrol.io/packages/Babel) via the package manager in Sublime Text
  - **Note:** Sublime Text 3 is required for this plugin
- Set the plugin as the default syntax for a particular extension
  - Open a file with the `.js` extension
  - Select `View` from the menu
  - Then `Syntax -> Open all with current extension as...`
  - Then `Babel -> JavaScript (Babel)`
  - Repeat for any other extensions, e.g. `.jsx`

Recommended Theme
- Install [Oceanic Next Color Theme](https://github.com/voronianski/oceanic-next-color-scheme) via the Sublime Text package manager.
- Add the following to `Sublime Text -> Preferences -> Settings-User` (`⌘ + ,` on Mac)
```
{
  "color_scheme": "Packages/Oceanic Next Color Scheme/Oceanic Next.tmTheme",
  "theme": "Oceanic Next.sublime-theme"
}
```

Code expander
- Examples:
  - `div.cool-class` becomes `<div className="cool-class"></div>`
  - `a` becomes `<a href=""></a>`
- Install [Emmet](https://github.com/sergeche/emmet-sublime) via Sublime Text package manager
- Configure Emmet to work with React, e.g. classes expand to `className` instead of `class`
- Follow the instructions under [Get Emmet working](http://www.nitinh.com/2015/02/setting-sublime-text-react-jsx-development/)
  - **Note:** Add the last snippet of code to `reg_replace.sublime-settings` by navigating to  `Sublime Text -> Preferences -> Package Settings -> Reg Replace -> Settings-User`

JavaScript linting
- Install [ESLint](http://eslint.org/docs/user-guide/getting-started) with `npm i -g eslint`
- For new projects, you can create a local `.eslintrc.json` file by running `eslint --init`
  - **Note:** If you're using ES6, make sure you add `"modules": true` to `"ecmaFeatures"` and `"node": true` to `"env"` in your `.eslintrc.json` file
  - **Note:** If you are using React, make sure you have `eslint` and `eslint-plugin-react` as `devDependencies` in your `package.json` file
  - **Optional**: Add `"lint": "eslint ."` to your `package.json` file to run linting at any time via `npm run lint`

Automatic JavaScript linting in Sublime Text
- Install [SublimeLinter](http://sublimelinter.readthedocs.org/en/latest/installation.html) following the instructions under "Installing via Package Control"
- Install [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint) with the package manager. The package is called `SublimeLinter-contrib-eslint`

### Testing


### Description of Files and Folders

## Contributing

### Style Guide and Naming Conventions

### Pull Requests

To contribute to the repository, please create a feature branch off of the dev branch. Once you're finished working on the feature, make a pull request to merge it into dev. Then, make sure to delete the branch when it's no longer used. Please make sure that every pull request has passed the build checks, which appear just before the "Merge pull request" button in github.

### Adding New Content

SCSS Files
  - Use SCSS syntax, but do not overly nest
  - Follow the [BEM](https://en.bem.info/method/naming-convention/) naming convention
  - Use variables, mixins, and classes as much as possible from our [style guide](https://github.com/appirio-tech/styles)
  - Reuse our [UI Components](https://github.com/appirio-tech/ng-ui-components)
  - When adding media queries, nest them inside the element, rather than creating a new section
  ```
  .box {
    height: 50px;
    width: 50px;
    @media screen and (min-width: 768px) {
      height: 100px;
      width: 100px;
    }
    
    .inside-box {
      font-size: 14px;
      @media screen and (min-width: 768px) {
        font-size: 18px;
      }
    }
  }
  ```
  - This repository uses flexbox for arranging content. The use of any extra CSS libraries should be discussed with the team

JavaScript
  - See this section on [naming conventions and style guide](https://github.com/appirio-tech/topcoder-app/blob/dev/README.md#style-guide-and-naming-conventions)
