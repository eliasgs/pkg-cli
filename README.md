# pkg-cli

Command line script for easy access to a Node module's package.json data. 

## Install

```bash
npm install -g pkg-cli
```

## Usage

Basically it takes the first command line argument and prints the matching
field from the package.json found in the current working directory.

### Examples

* Create a new github repository with [hub](http://hub.github.com/)
```bash
hub create -d "$(pkg description)"
```


* After bumping the version in package.json, you could commit it simply by
```bash
git commit -am v$(pkg version)
```
