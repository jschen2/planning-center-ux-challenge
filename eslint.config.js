import eslintConfigPrettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [{
    "ignores": ["eslint.config.js"],
    "rules": {
      "prefer-const": "error"
    }
  },
  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...jsxA11y.flatConfigs.recommended
  }
];
