# Textpattern plugins website

[![Build Status](https://travis-ci.com/textpattern/textpattern-plugins-website.svg)](https://travis-ci.com/textpattern/textpattern-plugins-website)
[![Known Vulnerabilities](https://snyk.io/test/github/textpattern/textpattern-plugins-website/badge.svg?targetFile=package.json)](https://snyk.io/test/github/textpattern/textpattern-plugins-website?targetFile=package.json)

**CURRENTLY UNDER DEVELOPMENT**

Official 2019+ plugins website of the [Textpattern](https://textpattern.com/) project. **Requires Textpattern 4.8.1 or later.**

Pulls supporting data from the [Textpattern curated plugins list repository](https://github.com/textpattern/textpattern-curated-plugins-list).

## Supported web browsers

* Chrome, Edge, Firefox, Safari and Opera the last two recent stable releases.
* Internet Explorer 11.
* Firefox ESR latest major point release.

Older versions of the above and other browsers may work, but these are the ones we verify.

## Requirements

Building this repository requires:

* [Node.js](https://nodejs.org/)
* [Grunt](https://gruntjs.com/)
* [Composer](https://getcomposer.org/)

## Setup

### Installing required tools

The project uses [Grunt](https://gruntjs.com/) to run tasks. First make sure you have base dependencies installed: [Node.js](https://nodejs.org/) and [Grunt](https://gruntjs.com/). You can install Node using the [installer](https://nodejs.org/), Composer using the [installer](https://getcomposer.org/), and Grunt with npm:

```ShellSession
$ npm install -g grunt-cli
```

Consult the Grunt documentation for more instructions if necessary.

### Installing dependencies

After you have the base dependencies taken care of, you can install the project's dependencies. Navigate to the project's directory, and run the dependency manager:

```ShellSession
$ cd textpattern-plugins-website
$ npm install
$ composer install
```

**npm** installs Node modules for Grunt and **composer** installs PHP libraries.

## Building

This repository hosts sources and needs to be built before it can be used. After you have installed all dependencies, you will be able to run tasks using Grunt, including building:

```ShellSession
$ grunt @task@
```

Where the `@task@` is either `build` or `watch`.

* The `build` task builds the project.
* The `watch` task will launch a task that watches for file changes; the project is then automatically built if a source file is modified.

## Plugins used

All plugins we use are installed via Composer:

* [`etc_cache`](https://github.com/etc-plugins/etc_cache) ✓ Composer
* [`rah_custom_feed`](https://github.com/gocom/rah_custom_feed) ✓ Composer
* [`smd_thumbnail`](https://github.com/bloke/smd_thumbnail) ✓ Composer

## License

Licensed under the [GPLv2 license](https://github.com/textpattern/textpattern-plugins-website/blob/master/LICENSE).
