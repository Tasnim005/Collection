## Delete a branch in Git
### 1. Open a terminal or command prompt
### 2. Switching branch
+ Git **doesn't allow** you to delete the branch you're currently on (the branch you have checked out) using the -D (force delete) option. 
+ To delete a branch that is checked out, you need to switch to another branch first.
+ You can use the git checkout command to switch to another branch. For example:

```bash
git checkout main
```
+ Replace main with the name of the branch you want to switch to.

### 3. Deleting branch
+ Once you've switched to another branch, you can safely delete the desired branch using the -D flag:
```bash
git branch -D feature-branch
```
+ Replace 'feature-branch' with the name of the branch you want to delete.

## There are two kinds of delete:
### 1. -d flag
+ To delete a branch with the **-d flag** (safe deletion, only if it's fully merged):

```bash
git branch -d branch_name
```

+ Replace branch_name with the name of the branch you want to delete. 
+ Git will only delete the branch if all its changes have been merged into the current branch. If there are unmerged changes, Git will not allow you to delete the branch using -d.

### 2. -D flag
+ To forcefully delete a branch, even if it has unmerged changes, use the  **-D flag** :

```bash
git branch -D branch_name
```
+ Again, replace branch_name with the name of the branch you want to delete.  
+ Be cautious when using -D because it will delete the branch regardless of whether it's fully merged or not. Unmerged changes will be lost.