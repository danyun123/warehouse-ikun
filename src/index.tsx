import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/css/entire.css";
import { theme } from "./assets/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import state from "./state";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fas)

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={state}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
);
