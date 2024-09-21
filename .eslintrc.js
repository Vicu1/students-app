module.exports = {
    parser: '@typescript-eslint/parser', // If using TypeScript
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        // Add additional style guide if needed (e.g., 'airbnb', 'prettier')
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/prop-types': 'off',
    },
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            linterOptions: {
                reportUnusedDisableDirectives: true,
            },
        },
    ],
};
