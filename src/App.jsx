import { useTranslation } from 'react-i18next'

import Header from './components/Header'

import './App.css'

function App() {
  const { t } = useTranslation("global")

	return (
		<>
			<Header />
			<main>
        <h1>{t("mainSection.title")}</h1>
			</main>
		</>
	)
}

export default App
