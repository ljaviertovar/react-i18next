import ReactDOM from 'react-dom/client'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_en from '../public/locales/en/global.json'
import global_es from '../public/locales/es/global.json'

import App from './App.jsx'

import './index.css'

i18next.init({
	lng: 'auto',
  fallbackLng: 'en',
	resources: {
		en: {
			global: global_en,
		},
		es: {
			global: global_es,
		},
	},
	interpolation: { escapeValue: false },
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<I18nextProvider i18n={i18next}>
		<App />
	</I18nextProvider>
)
