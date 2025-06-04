import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the rule for using <a> instead of <Link />
      "@next/next/no-html-link-for-pages": "off",

      // Disable unused vars (or set to "warn" if you prefer that)
      "@typescript-eslint/no-unused-vars": "off",
    }
  }
];

export default eslintConfig;
