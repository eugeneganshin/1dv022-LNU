# Exercises

This is the repo for the Javascript exercises in the course. The virtual machine (hashicorp/trusty32) will have the following (relevant) packages installed:

From start:
* node.js (Latest stable)
* npm
* git

Some quirks to make the machine work out of the box in Windows.

## Install
Make sure you have the following installed on your system:
* Virtual Box [https://www.virtualbox.org/](https://www.virtualbox.org/)
* Vagrant [https://www.vagrantup.com/](https://www.vagrantup.com/)

Now, do:

1. Pull (`git pull https://github.com/1dv525/exercise-boilerplate.git`) into your existing excersise repo. Make sure you are in the root of your repo.

2. Do a `git push` to push your changes to GitHub.

3. Start the virtual machine using `vagrant up` (May take 10-30 minutes this first time. Ignore red command line statements and warnings.)

4. `vagrant ssh` to connect to the machine.

5. Follow the instruction for adding exercises.

