# Practice Makes Perfect

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNuJEsHuHzewPI7IdcgGmiVqu1JQ-Ale75UpUOUPXIw&s)

## How to start working on a new task

```
$ git checkout main
$ git pull origin main
$ git checkout -b branch-name
```

where `branch-name` is the task, e.g. `markdown` , `event-emitter` , etc

Please, commit your progress regularly. Remember about atomic commits!

```
$ git commit -m "first implementation"
```

Once you fix a test, I wouldn't mind a commit too:

```
$ git commit -m "fixed first test"
```

## How to run tests

```
$ npm run test
```

## How to make a pull request

```
$ git push origin branch-name
```

Once you pushed your branch to GitHub, you can go to GitHub main page and check the green button on top. It should appear once a new branch got detected by GitHub. Click the button and then create a new pull request.
