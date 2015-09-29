# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate?

+ Technically, you don't, but you shoud always have authentication. This prevents accidental leakage of private repositories to unauthorized users.

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
`GET /users/:username`

> The repository listing for a specific user?

`GET /users/:username repos`

> The recent, public activity for a specific user?

 `GET /repositories`


`GET /users/:username/subscriptions`

> Is there a limit to the number of requests I can make?

There is no limit to the amount of request that can be made. I've done some research and have seen that severs can get up to 65,000 request.

Homework 9-29-2015

> What are the endpoints for fetching?
* APIs endpoint is any URL that the API understands

> the profile data for a user?


> the organizations a user belongs to?

> the repositories a user has created?
a filtered list of repositories?

> a sorted list of repositories?

> public events for a user?
When fetching public events for a user...
How many results are returned by default?
What limitations exist on fetching more results?
What is the basic structure of the results?
What fields are included in each result?
What are the data types for each field?
What are some of the different values for the type field?
