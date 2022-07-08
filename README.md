<div align="center">
<a href="https://tridiamond.tech" target="_blank" rel="noopener noreferrer">
    <img width="80" alt="image" src="https://raw.githubusercontent.com/bennyxguo/react-angular-demo/5da6dfba4e9cd53064bdc698fb60957f7aefdedb/resources/angular_logo.svg">
  </a>
  <a href="https://tridiamond.tech" target="_blank" rel="noopener noreferrer">
    <img width="80" alt="image" src="https://raw.githubusercontent.com/bennyxguo/react-angular-demo/5da6dfba4e9cd53064bdc698fb60957f7aefdedb/resources/react_logo.svg">
  </a>
  <br/>
  <h1><b>Integrate Angular in React</b></h1>
  <strong>Experiment project for dynamically loading Angular application in React</strong>
</div>

## Intro

![structure-diagram](https://github.com/bennyxguo/react-angular-demo/blob/main/resources/structure-diagram.png?raw=true)

In situation where a big application has multiple teams working with different frontend framework or structures.

For example, we have a outer commonly used container which is built using React. The content of this container is built with Angular in a different framework and frontend.

This setup should support the following features:

- Hosted in different domain / servers
- Can be changed and built independently
- Any changes in the content application can be reflected without rebuilding the container
- Can support multiple child content
- Data can be passed down to the child content application (React state can be passed down to the Angular application)

This concept is built base on this [article](https://javascript.plainenglish.io/how-to-dynamically-integrate-angular-in-react-and-share-data-between-both-c507e90b1f09).

## Running the application locally

### Installing the dependencies for both applications:

```shell
# 1. Install Angular app dependencies
cd angular-app
npm install

# 2.Install React app dependencies
cd ../react-container
npm install
```

### Start Angular App

This will run the app on a given port (4200 locally). Then we can access the necessary Web Component scripts in React using `localhost:4200`

```shell
cd angular-app
np serve
```

### Start React App

This will start the main container, it will run the React application.
It will automatically load in the Angular App in the content section.

```shell
cd react-container
npm run start
```
