/** @type {import("prettier").Config} */
const config = {
	singleQuote: true,
	trailingComma: "all",
	tabWidth: 2,
	semi: false,
	jsxSingleQuote: true,
	singleAttributePerLine: true,
	bracketSpacing: true,
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
	importOrder: [
		"^@/trpc/(.*)$",
		"",
		"^react$",
		"",
		"^next$",
		"^next/(.*)$",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^@/components/ui/(.*)$",
		"",
		"^@/components/(.*)$",
		"",
		"^[./]",
	],
};

module.exports = config;
