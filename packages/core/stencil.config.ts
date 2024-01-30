import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target'

export const config: Config = {
  namespace: 'hello-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [{
        src: '../scripts/custom-elements',
        dest: 'components',
        warn: true
      }],
    },
    angularOutputTarget({
      componentCorePackage: '@my-components/core',
      outputType: 'component',
      directivesProxyFile: '../angular/src/lib/components.ts',
      directivesArrayFile: '../angular/src/lib/components-array.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@my-components/core',
      outputType: 'standalone',
      directivesProxyFile: '../angular/standalone/src/lib/components.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
