# Installation Instructions

SAFETAG's curricula and reporting rely on the gitbook markdown publishing tool.

## OSX / Unix instructions

Currently we only have instructions for installing on OSX and Unix (Ubuntu, Debian, Gentoo, Mint) systems.

**Windows Warning**
Nodejs and GitBook are both Windows compatable. Because the SAFETAG audit framework requires a UNIX system we have not prioritized the Windows instructions. Installation should be very similar no matter what operating system is run.

### Installing nodejs

#### Installing a binary

You can download and install nodejs from the website or use a package manager to install it.

  * [Download installers for nodejs](http://nodejs.org/download/)
  * [Use a package manager to install nodejs](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) 

#### Building from source

Prerequisites for building nodejs from source (Unix only):

    * GCC 4.2 or newer
    * Python 2.6 or 2.7
    * GNU Make 3.81 or newer
    * libexecinfo (FreeBSD and OpenBSD only)

  * [Download the source for nodejs](http://nodejs.org/download/)
  * Go to your downloads directory.
  ```bash
  cd ~/Downloads
  ```
  * Compile the source
  ```bash
  cd node-v*
  ./compile
  make
  sudo make install
  ```
  * Unpack the source file
  ```bash
  tar -zxvf node*
  ```
  * Clean up the unneeded files
  **If you are on windows the binary is named node.exe and so node-v* will not be able to remove it. Also, rm is not the delete command on windows.**
  ```bash
  cd ~/Downloads
  rm -fr node-v*
  ```

### Installing GitBook

You can install GitBook using the [npm](https://www.npmjs.org/) (node package manager) or by building it from source.

#### Installing GitBook using npm

  * Use the command line to install GitBook using [npm](https://www.npmjs.org/)
  ```bash
  sudo npm install gitbook --global
  ``
  * GitBook is now installed.

#### Installing GitBook from source

TODO: This section still needs to be completed


### Un-installation

These instructions will remove everything that has been installed with SAFETAG. **If you install a package that you had before installtion of GitBooks it could break other things on your computer.**

  * Uninstall GitBook
  ```bash
  sudo npm uninstall gitbook --global
  sudo npm rm npm --global
  ```
  * Uninstall npm
  ```bash
  sudo npm rm npm --global
  ```

#### Uninstalling nodejs

Uninstalling nodejs is tricky. Please look [here](https://stackoverflow.com/questions/5650169/uninstall-node-js-using-linux-command-line) for instructions.

## NOTES:

  * [Where did npm install gitbook to?](https://www.npmjs.org/doc/faq.html#Where-does-npm-put-stuff)
