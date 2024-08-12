// code to dynamically import images into ReactJS, not working on local development environment due to security restrictions

function getImageURL(name) {
  return new URL("./" + name, import.meta.url).href;
}

export { getImageURL };
