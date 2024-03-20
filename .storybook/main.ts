// eslint-disable-next-line @typescript-eslint/no-var-requires
import path from 'path';

const config = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'none',
  },
  webpackFinal: (config) => {
    // config.resolve.modules.push(`${process.cwd()}/src`);
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../src/components'),
    };

    return config;
  },
};

export default config;
