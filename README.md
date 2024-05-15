# Practice Makes Perfect

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNuJEsHuHzewPI7IdcgGmiVqu1JQ-Ale75UpUOUPXIw&s)

## Git Cheat Sheet

### How to start working on a new task

```
$ git checkout main
$ git pull origin main
$ git checkout -b branch-name
```

where `branch-name` is the task, e.g. `markdown` , `event-emitter` , etc

Please, commit your progress regularly. Remember about atomic commits!

```
$ git status
$ git diff
```

Status shows you what files have been changed. Diff shows you the actual changes in files (Press "space" to move to next page in terminal. Press "q" to exit). Alternatively, you can use vscode source control UI for that (`ctrl + shift + G`).

Check what's changed and make sure it's what you want, then add to stage:

```
$ git add .
```

Then commit:

```
$ git commit -m "first implementation"
```

Once you make a fix and even one test becomes green, I wouldn't mind a commit too (go back to the beginning of this section, rinse and repeat). Remember that the git history will help you not only track the progress but also go back in time if you mess up the code, and want to just check out to the previous working state.

### How to make a pull request

```
$ git push origin branch-name
```

Once you pushed your branch to GitHub, you can go to GitHub main page and check the green button on top. It should appear once a new branch got detected by GitHub. Click the button and then create a new pull request.

## Local Development

### How to run tests

```
$ npm run test
```

### Keep the code style consistent

```
$ npm run format
```
