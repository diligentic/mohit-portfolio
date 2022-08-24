---
slug: "create-react-native-template"
date: "2021-03-07"
title: "Create React Native Template"
spoiler: 'Reduce initial project setup time from days to <5 minutes'
---

React-Native has become one of the most emerging frameworks nowadays. It has got so many powerful features like, cross-platform native apps using javascript, fast refresh, huge community, etc., which makes it different from its competition. Code reusability using the concept of the component is one of them. Today we are going to discuss one of the powerful features of the **react-native-cli** which allows us to reuse our code, configurations, set of rules, etc., into our newly created project and save tons of time and effort.

## Some theory
While working in an organisation or team, most probably you will be following some common coding practices, rules, folder structure, set of tools and configurations, etc. When initialising a new project, sometimes it becomes a pain and time-wasting to do all of the things from the scratch for every new project like adding a folder structure, installing the commonly used dependencies, the configuration of the tools like redux, mobex, eslint rules, CI/CD configurations, staging, and production app setup, setting up the splash screen, etc.

Today we are going to talk about this common pain point and try to find a solution to the problem, automate the process, and save at-least 80% of time and resources. In the [0.42.0](https://github.com/facebook/react-native/commit/3a6dff4f4fe3d910c15bed7fa625681865f79f3a), [Martin Konicek](https://github.com/mkonicek) did an awesome job and gave us a gift in the form of the Project Template. I have not found much of the resources talking about this cool feature and seems like it is one of the uncovered features of the **react-native-cli**. The react-native docs talk about this feature a bit, but only for initialising the project with the typescript template. In reality, it can dramatically change your development experience especially when you are about to create a new project and thinking about initialising your project, and hoping for any solution to pre-configure commonly used libraries, components, logic, etc.

While searching on the internet for the solution, I found [this](https://medium.com/dailyjs/the-1-2-3s-of-react-native-templates-1f5dda037e11) medium article. But unfortunately, it is outdated and does not work anymore.

## What is a project template?
As the name suggests, a project template is a template(starter) for your new project which can include any of your custom reusable configuration, components, folder structure, etc. It allows us to initialise our new project with our own starter instead of the default “Welcome to React Native” project. The command to initialise our new project with a custom template looks like this:

```bash
npx react-native init <project-name> --template <path-to-template>
```

> Note: The steps shown in this article apply only to the projects initialised using the `react-native init`, not with the `expo init`.


## To create a template

Let’s get started and see how to make our own custom template. The basic steps of creating the template includes:
1. Initialise a new project for template
2. Convert this newly created project into a template
3. Use the template

## Initialise a new project for template

Please make sure that you have gone through and implemented all of the steps described in the [Initial Getting Started Guide](https://reactnative.dev/docs/environment-setup) for React-Native Environment Setup. Then create a new folder with any name you like(for example `react-native-template`). Now, initialise a new project inside this folder as you usually do for a new React-Native project. You can name it with any name you want but keep in mind that we will be using this project name, later on, to define in our template configuration to replace all of the occurrences of this name.

```bash
npx react-native init ProjectName
```

After the initialisation process, the folder structure will be like:

```
react-native-template
└── ProjectName
    ├── android
    ├── ios
    ├── index.js
    ├── App.js
    ├── package.json
    └── ...other files
```

Now, replace dot(.) with underscore(_) for all of the hidden files in the newly created project. For example, `.gitignore` will become ` _gitignore`, `.eslintrc.js` will become ` _eslintrc.js`, etc.

This project will act as a starting point for our template. After initialising this project, add your desired custom configurations like:

- Basic folder structure and common components like buttons, headers, etc
- Basic Navigation
- State management tools like redux, mobx etc
- Splash screen setup
- Linting rules
- CI/CD setup
- Staging and production environment setup and so on...

We need to do these things only once and then it will make our life much easier for the next time as we will automate this process to be completed with only a single command.
In this example, `ProjectName` is a special world(as I mentioned earlier) which will be replaced with your new app.

## Convert this newly created project into a template

- Rename the `ProjectName` folder to `template` in order to make it more clear that it is a template.
- Create a new file at the root level, adjacent to the template folder with the name `template.config.js`.

```bash
touch template.config.js
```

Upto this point, your folder structure should look like:

```
react-native-template
└── template
|   ├── android
|   ├── ios
|   ├── index.js
|   ├── App.js
|   ├── package.json
|   └── ...other files
└── template.config.js
```

Now add following inside the `template.config.js` file:

```js
module.exports = {
  placeholderName: 'ProjectName',
  templateDir: './template',
}
```

The more options can be found [here](https://github.com/react-native-community/cli/blob/master/docs/init.md#creating-custom-template). But adding these 2 should do our job and are required. That's it.

## Use the template

Now let’s see how we can use our template to create our next cool project. As mentioned earlier, you can initialise the new project by using the `--template` flag to the `react-native init` command and passing the path to the template. Here comes another cool part of the story. The template path can be any one of the npm package, GitHub repo, or even the local directory file as mentioned [here](https://github.com/react-native-community/cli/blob/master/docs/commands.md#--template-string). I have created a starter template for the demonstration which you can find [here](https://github.com/ajaykumar97/react-native-template) and I have published it into the [npm](https://www.npmjs.com/package/@ajaysidhu/react-native-template) as well(you can publish it to the npm just like a normal npm package as described [here](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)). Let us see how to use the template directly from the GitHub:

**Using local path:** For the template to be on the `Desktop`(in case of MacOS), the project can be initialised as

```bash
npx react-native init MyApp --template /Users/<username>/Desktop/react-native-template
```

**Using Github**: For the GitHub repo link https://github.com/ajaykumar97/react-native-template, the project can be initialised as:

```bash
npx react-native init MyApp --template https://github.com/ajaykumar97/react-native-template
```

**Using npm**: For the npm package [`@ajaysidhu/react-native-template`](https://www.npmjs.com/package/@ajaysidhu/react-native-template?ref=hackernoon.com), the project can be initialised as:

```bash
npx react-native init MyApp --template @ajaysidhu/react-native-template
```

After the successful initialisation, all of the dependencies will be automatically installed, just like as the traditional `npx react-native` but with our custom template.

## Final thoughts

I found it to be super helpful while initialising any new project with preloaded stuff. It can save the day’s of work for us. My template can be found [here](https://github.com/ajaykumar97/react-native-template). Feel free to use it in your next React-Native project and do let me know in the [issues](https://github.com/ajaykumar97/react-native-template/issues) section of the repo for any improvement in the setup.

## Thanks
Thanks to [Martin Konicek](https://github.com/mkonicek) for introducing this awesome feature into the **react-native-cli**.
