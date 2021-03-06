const fs = require('fs');
const path = require('path');
const partition = require('lodash/partition');

const componentsPath = path.join(__dirname, 'lib/components/index.ts');
const componentsSource = fs.readFileSync(componentsPath, 'utf-8'); // eslint-disable-line no-sync
const components = componentsSource
  .match(/export { [A-Za-z]+/g)
  .map(x => x.replace('export { ', ''))
  .sort();
const [iconNames, componentNames] = partition(components, x =>
  /.+Icon$/i.test(x),
);

module.exports = [
  { route: '/', name: 'home' },
  { route: '/components', name: 'components' },
  ...componentNames.map(name => ({ route: `/components/${name}/`, name })),
  ...iconNames.map(name => ({ route: `/icons/${name}/`, name })),
];
