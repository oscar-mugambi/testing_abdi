### In-memory management
The task uses redux which persist data to local storage.

### Tech stack used.

- `typescrip`
- `reactjs`
- `redux`


## Requirements

For development, you will only need Node Version Manager (NVM), Node.js npm or Yarn, installed in your environement.

## Mac OS / Linux / Unix

### Install NVM for managing Node.js versions

The reason for using [nvm](https://github.com/creationix/nvm) instead of other install types is mainly in how easy it is to have multiple versions of Node.js (if needed) without too much of extra complexity. Sometimes applications might require a certain version of Node.js to work, so having the flexibility of using specific versions can save a lot of time from you.

1. Open new Terminal window.
2. Run [nvm](https://github.com/creationix/nvm) installer
   - ...with _either_ curl _or_ wget.
     - `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
     - `wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
   - The script clones the nvm repository to `~/.nvm` and adds the source line to your profile (`~/.bash_profile`, `~/.zshrc,` `~/.profile,` or `~/.bashrc`). (You might want/need to add the source loading line by yourself, if the automated install tool does not add it for you.)
     ```sh
     export NVM_DIR="$HOME/.nvm"
     [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
     [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
     ```
3. If everything went well, you should now be able to reload the shell by running
   - `source ~/.bashrc`
   - (Another option is to open a new Terminal window/tab.)
4. Verify installation
   - To verify that nvm has been installed, do: `command -v nvm`
5. List what versions of Node are currently installed (probably none).
   - `nvm ls`
6. Install latest [Node.js](https://nodejs.org/en/) LTS release (recommended for production usage).
   - `nvm install lts`
   - `nvm install v11.10.0`

### Yarn installation

After installing NVM, this project will need yarn too, so just run the following command.

- `npm install -g yarn`

---

## Windows

### Install NVM for managing Node.js versions

The reason for using [nvm](https://github.com/coreybutler/nvm-windows) instead of other install types is mainly in how easy it is to have multiple versions of Node.js (if needed) without too much of extra complexity. Sometimes applications might require a certain version of Node.js to work, so having the flexibility of using specific versions can save a lot of time from you.

1. Download and install nvm-setup.zip for the stable maintenance release from [here](https://github.com/coreybutler/nvm-windows/releases)
2. To install Node.js and NPM, open CMD prompt and run
   - `nvm install latest`
3. If everything went well, check the Node.js version installed by running
   - `node -v`
   - (Another option is to open a new Terminal window/tab.)
4. Use the installed Node.js version that is outputted from the previous command e.g. v11.12.0
   - `nvm use 11.12.0`
5. Install [node-gyp](https://github.com/nodejs/node-gyp), a command-line tool written in Node.js for compiling native addon modules for Node.js
   - `npm install -g node-gyp`
6. Install the build tools for compiling native Node.js modules in windows by running
   - `npm install —global —production windows-build-tools`
## Install

Next up, installing and running the application use node v12 and above

- `git clone https://github.com/abdilatifbashir/student `
- `cd student`
- `npm install`
- `npm install`
- `npm start`

### implemented functionality

The app add and delete Student details and manages data on redux that persist to localstorage


