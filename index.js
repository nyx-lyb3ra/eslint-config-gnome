import eslint from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      "@typescript-eslint/array-type": [
        "error",
        {
          default: "array-simple",
        },
      ],
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/no-array-constructor": "error",
      "@typescript-eslint/no-invalid-void-type": [
        "error",
        {
          allowAsThisParameter: true,
        },
      ],
      "@typescript-eslint/no-loop-func": "error",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unnecessary-condition": [
        "error",
        {
          allowConstantLoopConditions: "only-allowed-literals",
          checkTypePredicates: true,
        },
      ],
      "@typescript-eslint/no-unnecessary-type-parameters": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          functions: false,
          allowNamedExports: true,
        },
      ],
      "@typescript-eslint/prefer-readonly": "error",
      "block-scoped-var": "error",
      "complexity": [
        "warn",
        {
          variant: "modified",
        },
      ],
      "eqeqeq": "error",
      "no-await-in-loop": "error",
      "no-caller": "error",
      "no-constructor-return": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-label-var": "error",
      "no-multi-assign": "error",
      "no-new-wrappers": "error",
      "no-object-constructor": "error",
      "no-promise-executor-return": "error",
      "no-restricted-globals": [
        "error",
        {
          name: "Debugger",
          message: "Internal use only",
        },
        {
          name: "GIRepositoryGType",
          message: "Internal use only",
        },
        {
          name: "log",
          message: "Use console.log()",
        },
        {
          name: "logError",
          message: "Use console.warn() or console.error()",
        },
      ],
      "no-restricted-properties": [
        "error",
        {
          object: "imports",
          property: "format",
          message: "Use template strings",
        },
        {
          object: "pkg",
          property: "initFormat",
          message: "Use template strings",
        },
        {
          object: "Lang",
          property: "copyProperties",
          message: "Use Object.assign()",
        },
        {
          object: "Lang",
          property: "bind",
          message: "Use arrow functions or Function.prototype.bind()",
        },
        {
          object: "Lang",
          property: "Class",
          message: "Use ES6 classes",
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector:
            'MethodDefinition[key.name="_init"] CallExpression[arguments.length<=1][callee.object.type="Super"][callee.property.name="_init"]',
          message: "Use constructor() and super()",
        },
      ],
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-var": "warn",
      "unicode-bom": "error",
    },
  },
  prettierRecommended,
);
