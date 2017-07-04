# Exercises

This is the repo for the Javascript exercises in the course. The virtual machine (hashicorp/trusty32) will have the following (relevant) packages installed:

From start:
* node.js (Latest stable)
* npm
* git

Some quirks to make the machine work out of the box in Windows.

Exercises are constantly updated and added.

## Install
Make sure you have the following installed on your system:
* Virtual Box [https://www.virtualbox.org/](https://www.virtualbox.org/)
* Vagrant [https://www.vagrantup.com/](https://www.vagrantup.com/)

Now, do:

1. Pull (`git pull https://github.com/1dv525/exercise-boilerplate.git`) into your existing excersise repo. Make sure you are in the root of your repo.

2. Start the virtual machine using `vagrant up` (May take 10-30 minutes this first time. Ignore red command line statements and warnings.)

3. Add the exercise/exercises you want to work on (you can always add new exercises at a later stage). `git subtree add --prefix=tiny-tunes --squash git@github.com:CS-LNU-Learning-Objects/exercise-tiny-tunes.git master` to add the tiny-tunes exercise.

3. `vagrant ssh` to connect to the machine.

## In the vagrant terminal (after `vagrant ssh`)
1. Make sure you are located in the folder of the exercise you are working on.
2. If it is the first time working on this exercise do a `npm install`
2. Do `npm start`. The following will happen:
  * A process will start watching files in the folder `source/` for changes. When a change is detected the file will be "compiled" in to a virtuak file called "build.js". A web server is started which will serve your browser with the resources needed.
3. Browse to `http://10.10.10.61:4000` to locate the application.

## In the Git-bash or terminal on your local computer
You should have multiple terminals open at the same time. One running the `npm start`  in the vagrant-terminal, and one terminal **not** ssh:ed to vagrant. In the terminal on your local machine you could to tasks like committing and pushing to GitHub. 

## Local IDE
1. Start up your IDE (Visual Studio Code) and open a new project pointing to the folder "exercise"
2. Start editing your site in the `source`-folder. When you save a change look at the "vagrant terminal". You should see that the files are rebuilt. 
3. The webpage at `10.10.10.61:4000` should be automaticly reloaded. If not, refresh the browser.
4. When you debug your application you should to this in the browser, not in the IDE. A simple method is to write `debugger;` in your js-source code where you want to stop the debugger and refresh the browser. Sourcemapping will make sure that linenumbers in the compiled-code matches your local version.


