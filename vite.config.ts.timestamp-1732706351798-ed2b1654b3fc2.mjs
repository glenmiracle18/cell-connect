// vite.config.ts
import { vitePlugin as remix } from "file:///Users/glen/Desktop/Developers/cell-connct/node_modules/.pnpm/@remix-run+dev@2.9.2_@remix-run+react@2.9.2_react-dom@18.2.0_react@18.2.0__react@18.2.0_types_jka2hxrd44kkp5baglcgpsgzfa/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///Users/glen/Desktop/Developers/cell-connct/node_modules/.pnpm/vite@5.1.3_@types+node@20.11.19/node_modules/vite/dist/node/index.js";
import envOnly from "file:///Users/glen/Desktop/Developers/cell-connct/node_modules/.pnpm/vite-env-only@2.2.0/node_modules/vite-env-only/dist/index.js";
import tsconfigPaths from "file:///Users/glen/Desktop/Developers/cell-connct/node_modules/.pnpm/vite-tsconfig-paths@4.3.1_typescript@5.3.3_vite@5.1.3_@types+node@20.11.19_/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    envOnly(),
    tsconfigPaths(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZ2xlbi9EZXNrdG9wL0RldmVsb3BlcnMvY2VsbC1jb25uY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9nbGVuL0Rlc2t0b3AvRGV2ZWxvcGVycy9jZWxsLWNvbm5jdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZ2xlbi9EZXNrdG9wL0RldmVsb3BlcnMvY2VsbC1jb25uY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSBcIkByZW1peC1ydW4vZGV2XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGVudk9ubHkgZnJvbSBcInZpdGUtZW52LW9ubHlcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHRlbnZPbmx5KCksXG5cdFx0dHNjb25maWdQYXRocygpLFxuXHRcdHJlbWl4KHtcblx0XHRcdGZ1dHVyZToge1xuXHRcdFx0XHR2M19mZXRjaGVyUGVyc2lzdDogdHJ1ZSxcblx0XHRcdFx0djNfcmVsYXRpdmVTcGxhdFBhdGg6IHRydWUsXG5cdFx0XHRcdHYzX3Rocm93QWJvcnRSZWFzb246IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pLFxuXHRdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdULFNBQVMsY0FBYyxhQUFhO0FBQ3BWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sYUFBYTtBQUNwQixPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxNQUFNO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDUCxtQkFBbUI7QUFBQSxRQUNuQixzQkFBc0I7QUFBQSxRQUN0QixxQkFBcUI7QUFBQSxNQUN0QjtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
