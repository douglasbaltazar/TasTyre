import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import Navbar from "components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "views/Home";


function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: red[600]
			},
			secondary: {
				main: blue[300]
			},
			background: {
				default: '#222222'
			}
		},
	})
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}  />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
