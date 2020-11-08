# webpack-module-example

This is an example module that will be used as a proof-of-concept to
develop a compilation and publishing strategy for the `search-index`
module.

## Aims

This repo contains the source code for a module that contains the
`level` dependency. Additionally this repo contains build scripts to
publish the module in various formats. The aim of this module is to
genarate:

 * A version of the module that runs in node
 * A version of the module that runs as a standalone js file that can
   be invoked from a `<script>` tag
 * A version of the module that can be compiled into a runnable web
   bundle
 * A suite of tests that can be run in node
 * A suite of tests that can be run in the browser

## Requirements

The code needs to be able to handle the `level` library

## Contraints

The source code is written in the "ES6 module" style, since this is
currenyly the most future-proof way to author modules.

### Bundlers


## Build strategy

### A version of the module that runs in node

This will be non-compiled. The node-version is essentially the raw
source of the module.

### A version of the module that runs as a standalone js file that can
be invoked from a <script> tag

This is compiled from the source code using webpack

### A version of the module that can be compiled into a runnable web bundle

This is compiled from the source code using webpack

### A suite of tests that can be run in node



### A suite of tests that can be run in the browser
