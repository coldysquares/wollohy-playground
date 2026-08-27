import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../registry.js', import.meta.url), 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox, { filename: 'registry.js' });

const toys = sandbox.window.WOLLOHY_PLAYGROUND;
const errors = [];
const warnings = [];
const required = ['id', 'title', 'kicker', 'description', 'url', 'tags', 'accent', 'featured', 'enabled', 'embed', 'order'];
const accents = new Set(['cyan', 'magenta', 'yellow', 'green', 'white']);

if (!Array.isArray(toys)) {
  errors.push('window.WOLLOHY_PLAYGROUND must be an array.');
} else {
  const ids = new Set();
  const orders = new Map();

  toys.forEach((toy, index) => {
    const at = `item ${index + 1}${toy?.id ? ` (${toy.id})` : ''}`;

    if (!toy || typeof toy !== 'object') {
      errors.push(`${at}: entry must be an object.`);
      return;
    }

    for (const field of required) {
      if (!(field in toy)) errors.push(`${at}: missing ${field}.`);
    }

    if (!/^[a-z0-9][a-z0-9-]*$/.test(toy.id || '')) {
      errors.push(`${at}: id must use lowercase letters, numbers, and hyphens.`);
    }

    if (ids.has(toy.id)) errors.push(`${at}: duplicate id ${toy.id}.`);
    ids.add(toy.id);

    if (!Array.isArray(toy.tags) || toy.tags.length === 0) {
      warnings.push(`${at}: add at least one useful tag.`);
    }

    if (!accents.has(toy.accent)) {
      errors.push(`${at}: unsupported accent ${JSON.stringify(toy.accent)}.`);
    }

    for (const field of ['featured', 'enabled', 'embed']) {
      if (typeof toy[field] !== 'boolean') errors.push(`${at}: ${field} must be true or false.`);
    }

    if (!Number.isFinite(toy.order)) errors.push(`${at}: order must be a number.`);
    else {
      if (orders.has(toy.order)) warnings.push(`${at}: shares order ${toy.order} with ${orders.get(toy.order)}.`);
      else orders.set(toy.order, toy.id);
    }

    const external = /^https:\/\//.test(toy.url || '');
    const local = /^toys\/[A-Za-z0-9._/-]+\.html(?:[?#].*)?$/.test(toy.url || '');
    if (!external && !local) {
      errors.push(`${at}: url must be a toys/*.html path or an https:// URL.`);
    }

    if (toy.enabled && local) {
      const path = new URL(`../${toy.url.split(/[?#]/)[0]}`, import.meta.url);
      if (!fs.existsSync(path)) errors.push(`${at}: enabled local toy is missing: ${toy.url}.`);
    }
  });
}

for (const warning of warnings) console.warn(`WARN  ${warning}`);
for (const error of errors) console.error(`ERROR ${error}`);

if (errors.length) {
  console.error(`\nRegistry invalid: ${errors.length} error(s), ${warnings.length} warning(s).`);
  process.exit(1);
}

console.log(`Registry valid: ${toys.length} toy(s), ${warnings.length} warning(s).`);
