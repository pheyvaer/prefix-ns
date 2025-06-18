/**
 * Created by pheyvaer on 18.04.17.
 */

import fs from 'fs-extra';

const data = (await fs.readJson('data.json'))["@context"];

export function getPrefixes(){
  return Object.keys(data);
}

export function asMap() {
  return data;
}

export function getNamespaceViaPrefix(prefix) {
  return data[prefix];
}

export function getPrefixViaNamespace(namespace) {
  const prefixes = Object.keys(data);
  let i = 0;

  while (i < prefixes.length && data[prefixes[i]] !== namespace) {
    i ++;
  }

  if (i < prefixes.length) {
    return prefixes[i];
  } else {
    return null;
  }
}
