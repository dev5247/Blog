import React from 'react'
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const { t } = useTranslation();
    const date = new Date().getFullYear();
    return(
    <div className='flex flex-col items-center text-center'>
        <hr className='w-[85%]'/>
        <p className='text-sm p-2 text-gray-400'>
            &copy; 2023-{date} {t('footerText')}
        </p>
    </div>
    )

}
export default Footer