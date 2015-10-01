# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate?

+ Technically, you don't, but you should always have authentication. This prevents accidental leakage of private repositories to unauthorized users.

> What can I do with an unauthenticated request?

+ One can return a message that states "Bad credentials" 401 unauthorized

> What _can't_ I do with an unauthenticated request?

You can't allow access to the user from who the request is coming from

> How can I authenticate my request?

1. Basic Authentication -

// and perhaps some code example?

`$ curl -u "username" https://api.github.com`

2. OAuth2 Token (sent a header) -- and more descriptive text

`$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com`

3. OAuth2 Token (sent as a parameter) -- yep, include a short description
`$ curl https://api.github.com/?access_token=OAUTH-TOKEN`

## [Users](https://developer.github.com/v3/users/)

> How do I ask the API for the profile information for a specific user?

. . .
+ `GET /users/:username`

> The repository listing for a specific user?

+ `GET /users/:username repos`

> The recent, public activity for a specific user?

+ `GET /repositories`


+ `GET /users/ericquayson/subscriptions`

> Is there a limit to the number of requests I can make?

+ There is no limit to the amount of request that can be made. I've done some research and have seen that severs can get up to 65,000 request.

+ API endpoint is any URL that the API understands

* What are the endpoints for fetching...
  * the profile data for a user?
  `GET "https://api.github.com/users/ericquayson"`
  * the organizations a user belongs to?
  `GET "https://api.github.com/users/ericquayson/orgs"`
  * the repositories a user has created?
  `GET "https://api.github.com/users/ericquayson/repos"`
  * a filtered list of repositories?
  `GET `
  * a sorted list of repositories?
  * public events for a user?
  `GET "https://api.github.com/users/ericquayson/events{/privacy}"`
* When fetching public events for a user...
  * How many results are returned by default?
  + I used this link and it returned a lot of arrays and dictionaries  `https://api.github.com/users/ericquayson/received_events`
  * What limitations exist on fetching _more_ results?
  * What is the basic structure of the results?
    + It will identify the user, the repo that the event is occurring, the payload, labels, and etc..
  + arrays within arrays (dictionaries)
  * What fields are included in each result?
    + actor, repo, payload, labels, state, comment
  * What are the data types for each field?
    + some are booleans and strings that are links
  * What are some of the different values for the `type` field?
    + `type` can either describe a user or the event
    * How can I use the Github API to...
    * get all the comments for a particular issue?
    `GET /repos/:owner/:repo/issues/:number/comments`
    * add a comment to an issue?
    `POST /repos/:owner/:repo/issues/:number/comments`
  * How can I use the jQuery API to...
    * get the HTML contents of an element?
    `GET `
    * create a _new_ HTML element?
    `POST`
    * add an HTML element to the page?
    `POST `
  * How can I use the Lodash API to...
    * replace placeholders with values from an object?
    * repeat code for every item of an array
query

## Promises

Promises are similar to event handlers, they allow for code to not be fired in order

I've also noticed that Promises deal with success or failure of events.

    * fulfilled -- the action relating to the promise succeeded
    * rejected -- the action relating to the promise failed
    * pending - hasn't fulfilled or rejected yet (this is not as commonly used)
    * settled -- has fulfilled or rejected

    * thenable -- describes an object that is promise-like, in that it has a then method.     The then function allows for you to to chain more then functions on to it. (Think of children telling stories... then this happened then that happened then this then that)

jQuery has its own version of promises called Deferreds     
