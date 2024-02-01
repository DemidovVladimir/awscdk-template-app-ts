import {NodePackageManager} from 'projen/lib/javascript'
import {AwsCdkTemplateTypeScriptApp} from '../src'

describe('npmConfigEnvironment', () => {
  test('should throw when npmConfigEnvironment is set', () => {
    expect(() => new AwsCdkTemplateTypeScriptApp({
      packageManager: NodePackageManager.NPM,
      name: 'my-test-app',
      defaultReleaseBranch: 'main',
      workflowNodeVersion: '18',
      cdkVersion: '1.129.0',
      deployOptions: {
        npmConfigEnvironment: 'stack',
        environments: [
          {
            name: 'dev1',
            awsCredentials: {
              roleToAssume: 'stub-role-2',
              region: 'dev-aws-region-1',
            },
          },
        ],
      },
    })).toThrow()
  })
})