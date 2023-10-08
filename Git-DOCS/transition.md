# Transitioning from a monorepo to standalone repositories
![](https://miro.medium.com/v2/resize:fit:1024/1*75pS4VA-LD5bnscwdGAHag.jpeg)
### 1. Identify Projects/Modules to Transition:

Determine which projects or modules within your monorepo you want to transition to standalone repositories. Make a list of these projects/modules.

### 2. Create New Standalone Repositories:

For each project/module you identified in step 1, create a new standalone repository on GitHub

### 3. Clone the Monorepo Locally:

Clone your existing monorepo to your local machine if it's not already cloned.

### 4. Create a New Branch:
* In your monorepo's local working directory, open a terminal or command prompt.
* Check the Current Branch (Optional): You can check which branch you are currently on using the following command:
```shell
git branch
```
This command will list all the branches in your monorepo, and the **currently active branch will have an asterisk (*) next to it.**

* To create a new branch for transitioning a specific project/module, use the following command:

```shell
git checkout -b transition-project1
```
Replace transition-project1 with a descriptive branch name that reflects the project or module you are transitioning.

This command creates a new branch and switches to it. Now, any changes you make will be isolated to this branch, keeping your main/default branch untouched.

### 4. Make Changes:

With the new branch active, you can make changes to the code in this branch. Specifically, you should remove any files and directories that are not part of the project/module you are transitioning. This cleanup process ensures that the branch contains only the relevant code for the standalone repository.

### 5. Commit Changes:

* After cleaning up the branch and ensuring it contains only the necessary code, you should commit the changes. Use the following commands:

```shell
git add .
git commit -m "Preparing for transition to standalone repo for Project1"
```
* Replace the commit message with a description of the changes you made.

### 6. Push the Branch to GitHub:

+ To push the branch with your changes to the remote repository on GitHub, use the following command:

```shell
git push origin transition-project1
```
+ Replace transition-project1 with the branch name you created earlier.
+ This command uploads the branch and its changes to your GitHub repository. It's essential to have a remote copy of the branch because you'll use it to create the new standalone repository.

By creating a new branch for each project/module you plan to transition, you can keep the changes for each project/module separate and organized within the monorepo. This isolation makes it easier to manage the transition process and simplifies the process of creating standalone repositories for each project/module on GitHub.
