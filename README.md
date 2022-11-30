# PayEasy Loans Web Application

PayEasy Loans provides an easy way to provide loans to its customers. The application's features are:

1) Signup page to add new users.
2) Login page to authenticate.
3) An overview page that gets an overview of the application.
4) Take a loan page.
5) Show all existing loans.
6) Logout page

## Get Started

Install Dependencies

```shell
$ npm install
```

Run the application

```shell
$ nodeman server.js
```

## Technical Details

The application is a server side web application. The backend APIs are written in Javascript and Express framework and run using NodeJs. The UI interface is written in PUG and CSS and render using express framework. Authentication is done using JWT token that's passed in the cookies.