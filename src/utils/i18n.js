import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init(
        {
            debug: true,
            fallbackLg: 'en',
            interpolation: {
                escapeValue: false,
            },
            resources: {
                en: {
                    translation: {
                        'title': 'Decoration Blogs',
                        'explainText': 'Please decorate your house, day and life...',
                        'footerText':'DecorationBlogs is a registered trademark. All rights Reserved.'
                    }
                },
                fr: {
                    translation: {
                        'title': 'Blogs de décoration',
                        'explainText': "S'il vous plaît, décorez votre maison, votre journée et votre vie...",
                        'footerText':'DécorationBlogs est une marque déposée. Tous droits réservés.'
                    }
                }
            }
        }
    )

export default i18n