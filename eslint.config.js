import tseslint from 'typescript-eslint';
import pooolint from '@poool/eslint-config-react';

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', '.yarn', '.dev'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...pooolint.configs.recommended,
);
