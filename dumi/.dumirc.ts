import { defineConfig } from "dumi";

export default defineConfig({
	chainWebpack(memo) {
		memo.plugins.delete("copy");
	},
	themeConfig: {
		logo: "https://s1.ax1x.com/2023/04/05/pp5LI1S.jpg",
		nav: [
			{ title: "首页", link: "/" }
		],
		socialLinks: {
			github: "https://github.com/danyun123/warehouse-ikun/tree/master"
		},
	},
});
