# Getting started as A collaborator of GPD (Galactic Planetary Data Hub)
Github Repository Link: https://github.com/robbobfrh84/GPD

**Note:** If you haven't been to any of the classes where we went over this project, you'll find all the steps needed to get up and running here. You'll need me to add you as a contributor, so feel free to PM me your github username to get started. If you have any questions, please email bob@austincodingacademy.com. In addition, a **summery** of commands and steps is included below, feel free to start from there if you feel comfortable.

To get started contributing to this project, open your command line and follow along. All git commands will start with the $ symbol.

----
### Setting up for development

Move into the directory you want the projects files to be stored.
* Example: $`cd github`

Clone projects files to your computer's directory.
* Follow the link above to the Github GDP repository.
* Find and click the green **[Clone or Download]** button to see the url we'll be using here 👇.
  * $`git clone https://github.com/robbobfrh84/GPD.git`
* Then, change the directory to the new "GDP" folder created.
  * $`cd GDP`

Open the project's index.html file with Chrome
* $`chrome client/index.html`

Hopefully, at this point, chrome will open a new tab and display the current project state on your browser.

Now, lets start contributing. But first, It's very important when working with a team to create your own branch to work off of. Currently, you are on the 'master' branch. However, you do not ever want to develop on this branch. So let's create our own to mess around with.  

Always check to see what branch you're on before making changes.
* $`git branch`

Create a new branch to view and work on the project.
* $`git checkout -b 'myFirstBranch'`

Now, it's important to get into the habit of double-checking your branch before making changes.
* $`git branch`
* The return statement should show your new branch highlighted in green with an `*` next to it.

Check for changes you've made that are different from the master branch.
* $`git status`

If you haven't change any of the files or folders you should get the return message.

```
On branch myFirstBranch
nothing to commit, working tree clean
```

----
### Editing, adding, committing and submitting pull requests to github.

Now that you've created your own branch, it's finally safe to start coding and making changes. So, let's open the project folder in a text editor.
* If you use atom, you can $`atom .` to open the project folder directly.

Now, make some changes and refresh the chrome page you opened earlier to see your changes take effect.
* Example: in the 'client/css' folder, you'll find main.css
  * try changing the `background-color` of the body from `gray` to `red`.

```css
body {
  background-color: red;
}
```

Refresh the page to see the background now be an annoyingly painful red.

We can also see the changes in of our branch in the command line.
* $`git diff`
* Note: when you've made a lot of changes, you may need to press `q` to exit

Now, lets stage our changes for commit.
* $`git add .` NOTE: < the '.' at the end tells git to add ALL code. We could specify which files/folders, but that's not a common practice.

Run $`git diff` again and you shouldn't see any changes displayed. That's because you've staged your changes and `git diff` only shows the changes of your current version. Lets add something else to the code... How about changing the text `color` to `green`

```css
body {
  background-color: red;
  color: green;
}
```

* $`git diff` should now show ONLY the color change to green. If you want to see all changes on your branch from the start you can $`git diff --staged`. Now, you should see all the changes you've made.

So these aren't any changes we actually want to make. Let's say we know have an actual issue we wont to work on. Rather than undoing all our changes, lets just start from a fresh branch with updated code (in case any changes to the code by somebody else has has been merged).
* $`git checkout master`
* $`git pull` < will update your master branch to the current version you'd see on github.

Here's where we could remove our first branch if we new we didn't need any of the changes we'd made.
* $`git branch -D myFirstBranch`

Or, just create a new branch to work from. You don't need to remove this branch to start a new one. However, old branches often get WAY behind and become difficult to develop on. It's important that your branches stay as up to date as possible to avoid potential conflicts. More on that later.
* $`git checkout -b 'adding-name'`
* $`git branch` < makes sure you've correctly created your new branch and you're on it, NOT on the master branch.

In the `workshop` folder, open the `contributors.txt` file and add your name.
$`git diff` < should show the file and your name added.

ALRIGHT! We're ready to make our first commit!
* $`git add .` stages your changes for commit.
* $`git commit -m 'added my name to contributors.txt file'`
* Always leave a brief message about your commit.
* $`git push origin adding-name`

Go to the project repo, link: https://github.com/robbobfrh84/GPD
* Here, you should see your branch ready to complete your pull request.
* Click the green [Compare & pull request] button.
* Now, you can add any additional notes to your pull request.
* When ready click the green [Create pull request] button.

In most cases, this is where you'd probably be done. Sometimes you'll not even be authorized to merge your pull request as it needs to be reviewed by another developer on the team. So, lets just leave it there.

But, let's let the other developers know you've made changes ready to be merged.
* see: https://github.com/robbobfrh84/GPD/issues/7
* Now, you can add a message to the thread letting use know your PR is ready!

### OH NO! I've made changes to the master branch!!
* $`git reset --hard origin/master`

This command will simply revert the code you changed back. However, the code you changed may still be changed on your text editor. So, make a new branch to see the code reset. Also, `git pull` on the master branch to make sure you're up to date.

#### Summery
Setting up for development
* $`cd <Your-Project-Directory>`
* $`git clone https://github.com/robbobfrh84/GPD.git`
* $`cd GDP`
* $`chrome client/index.html`
* $`git checkout -b '<branch-name>'`
* $`git branch` < Double-check your branch
* $`git Status` < Checks for and displays any files you've made changes to.
Editing, adding, committing and submitting pull requests to github.
* Now, you can open your text editor and safely make changes to your branch
* ***If*** you use atom, $`atom .`
* $`git diff` < shows your current changes to last version of your branch
* $`git diff --staged` < shows all changes from when you started your branch.
* Now you can make your changes... When finished...
* $`git add .`
* $`git commit -m 'changed something important'`
* $`git push origin <branch-name>`

#### Minimum summery
Here are just the **must do** basic steps for workflow, after the repo is cloned and set up.

* $`cd` ... > Into your project folder.
* $`git branch` If you're not in master, move into it $`get checkout master`.
* $`git pull` update your master branch to head of the repository.
* $`git checkout -b '<branch-name>'`
* Now you can make your changes... When finished...
* $`git add .`
* $`git commit -m 'changed something important'`
* $`git push origin <branch-name>`

----
Git Resources: https://gist.github.com/hofmannsven/6814451
