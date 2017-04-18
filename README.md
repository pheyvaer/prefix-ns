# prefix-ns

This npm module gives easy access to the prefixes and namespaces of [prefix.cc](prefix.cc).
Upon installation of this module the latest dump is downloaded from prefix.cc and stored locally.
The dump is only updated when the module is re-installed.
A default dump (`data.json`) is available if the download of the dump fails.

## Usage
```$JavaScript
let prefix-ns = require('prefix-ns');

//The following method returns an array of all prefixes.
let allPrefixes = prefix-ns.getPrefixes();
console.log(allPrefixes);

// --> ['rdf', 'foaf', ...]

//The following method returns the namespace of a given prefix.
//null is returned when the prefix is not found.
let namespace = prefix-ns.getNamespaceViaPrefix('foaf');
console.log(namespace);

// --> http://xmlns.com/foaf/0.1/

//The following method returns the prefix of a given namespace.
//null is returned when the namespace is not found.
let prefix = prefix-ns.getPrefixViaNamespace('http://xmlns.com/foaf/0.1/');
console.log(prefix);

// --> foaf

//The following method returns a map where the prefixes are the keys and the namesapces are the values.
let map = prefix-ns.asMap();
console.log(map.foaf);

// --> http://xmlns.com/foaf/0.1/
```

## License
MIT