Include details about your SDK design in this file.

### Stack Used

Typescript ,Nodejs

### Library Used

* Isomorphic Unfetch : Switches between [unfetch](https://github.com/developit/unfetch) & [node-fetch](https://github.com/bitinn/node-fetch) for client & server
* microbundle: It is a wrapper around [rollup](https://rollupjs.org/guide/en) with sane defaults (including minification/compression), nice outputted size stats, multiple target formats (ES modules, CommonJS, UMD).

### Configurations

The project is configured to output its compiled code in the dist folder. Below are the main configuration made in pakage.json file:

* main -> dist/index.js : this will containtain the entry file
* module -> dist/index.m.js : this will output the module
* unpkg -> dist/index.umd.js : this will contain the pakage
* types -> dist/index.d.ts : this will have the types
* tsconfig.json contains the the compilations configurations together with folders to include and the folder not include the final compiled code.

### SDK Development

In the src directory will have the following files:

* Base.ts ->  this will contain all the necessary setup the sdk will need in order to interact with the API. It will define the headers needed, base Url for the API and the generic API calls and their respective responces. It will save as the core of the sdk
* utils.ts -> this will contain the mixin to enable once to extend more than one class. The usage of the mixin is applied on the index.ts to budle the classes together
* src/core folder contains the shared API responses for different resources such as movie and quotes.
* src/movie contains the skd implementation on how to interact with API and making the calls. The class extends the base class to make use of the defined configuration to interact with API
