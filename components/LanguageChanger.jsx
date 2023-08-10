import { usePathname, useRouter } from 'next-intl/client';
import { useState,  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLang } from '@/redux/langSlicer';

function LanguageChanger() {
    const langValue = useSelector((state) => state.lang);
    const pathname = usePathname();
    const router = useRouter();
    const dispatch = useDispatch();




    const handleLocaleChange = (locale) => {
        dispatch(setLang(locale));
        router.replace(pathname, { locale });

    };

    return (
        <div  className='flex items-center justify-center relative'>


                <div className='absolute bg-black text-white border flex flex-col top-8 left-0  border-gray-300 rounded p-2'>
                    <button
                        className={`px-2 py-1 w-8 h-8  ${
                            langValue === 'en' ? 'border border-red-400' : 'border-none'
                        }`}
                        onClick={() => handleLocaleChange('en')}
                    >
                      en
                    </button>
                    <button
                        className={`px-2 py-1 ${
                            langValue === 'tr' ? 'border border-red-400' : 'border-none'
                        }`}
                        onClick={() => handleLocaleChange('tr')}
                    >
                        tr
                    </button>
                </div>

        </div>
    );
}

export default LanguageChanger;
