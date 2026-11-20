import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import { defineConfig, lazyPlugins } from "vite-plus"

// https://vite.dev/config/
export default defineConfig({
	staged: {
		"*": "vp check --fix",
	},
	fmt: {
		useTabs: true,
		sortPackageJson: true,
		jsdoc: true,
		semi: false,
		sortImports: true,
		sortTailwindcss: true,
		trailingComma: "all",
		tabWidth: 2,
	},
	lint: {
		plugins: ["react", "typescript", "oxc"],
		rules: {
			"react/rules-of-hooks": "error",
			"react/only-export-components": [
				"warn",
				{
					allowConstantExport: true,
				},
			],
			"vite-plus/prefer-vite-plus-imports": "error",
		},
		options: {
			typeAware: true,
			typeCheck: true,
		},
		jsPlugins: [
			{
				name: "vite-plus",
				specifier: "vite-plus/oxlint-plugin",
			},
		],
	},
	plugins: lazyPlugins(() => [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()]),
})
