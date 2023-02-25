import commonjs from '@rollup/plugin-commonjs'
import { defineConfig } from 'vite'
import path from "path";//这个path用到了上面安装的@types/node
export default defineConfig({
	// ...
    plugins: [
        commonjs()
    ],
  
})
