# pkg-cli

Command line script for easy access to a Node module's package.json data. 

## Install

```bash
npm install -g pkg-cli
```

## Usage

Basically it takes the command line arguments and prints the matching field
from the package.json found in working directory.

### Example

```bash
hub create -d $(pkg description)
```
