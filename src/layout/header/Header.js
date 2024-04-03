import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import ToggleButton from '../../components/ToggleButton'
const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'French' }
};
const Header = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className='flex justify-end'>
                <div className='px-10'>
                    {Object.keys(lngs).map((lng) => (
                        <button key={lng}
                            className='p-2'
                            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                            type="submit"
                            onClick={() => { i18n.changeLanguage(lng) }}
                        >
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl p-3 text-gray-700 font-bold'>{t('title')}</h1>
                <h6 className='p-2 pb-3'>{t('explainText')}</h6>
                <hr className='w-[85%]' />
            </div>
        </>
    )

}
export default Header