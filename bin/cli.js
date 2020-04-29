#!/usr/bin/env node
'use strict';

const { gatherTelemetryForUrl, analyzeEmberObject } = require('ember-codemods-telemetry-helpers');

(async () => {
  await gatherTelemetryForUrl(process.argv[2], analyzeEmberObject, { timeout: 60000 });

  require('codemod-cli').runTransform(
    __dirname,
    'ember-object',
    process.argv.slice(2) /* paths or globs */
  );
})();
