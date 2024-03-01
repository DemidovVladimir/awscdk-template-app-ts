import {javascript, cdk, TextFile} from 'projen'
import {UpdateSnapshot} from 'projen/lib/javascript'

const nodeVersion = '20'

const project = new cdk.JsiiProject({
  author: 'Vladimir Demidov',
  authorAddress: 'uncojet@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'migawscdk-template-app-ts',
  description: 'A projen project for Typescript AWS CDK App',
  jestOptions: {
    updateSnapshot: UpdateSnapshot.ALWAYS,
  },
  keywords: [
    'projen',
    'Typescript',
    'AWS CDK',
    'Template',
  ],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/DemidovVladimir/awscdk-app-template-ts.git',
  packageManager: javascript.NodePackageManager.NPM,
  pnpmVersion: '8',
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    'projen',
  ],
  bundledDeps: [
    'semver',
  ],
  peerDeps: [
    'projen',
    'constructs',
  ],
  devDeps: [
    'fs-extra',
    '@types/fs-extra',
    '@types/semver',
    'yaml',
  ],
  workflowNodeVersion: nodeVersion,
  publishTasks: true,
  autoApproveOptions: {
    allowedUsernames: ['DemidovVladimir'],
  },
  autoApproveUpgrades: true,
  jsiiVersion: '5.x',
})

new TextFile(project, '.nvmrc', {
  lines: [nodeVersion],
})

project.eslint?.addRules({
  'curly': [
    'error',
    'multi',
    'consistent',
  ],
  'semi': [
    'error',
    'never',
  ],
  'object-curly-spacing': 'error',
  'nonblock-statement-body-position': ['error', 'below'],
})

project.synth()