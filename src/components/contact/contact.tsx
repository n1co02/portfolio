'use client'
import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from '../sectionHandler/sectionHeading/sectionHeading'
import { motion } from 'framer-motion'
import SubmitBtn from './submitBtn'
import { sendEmail } from '@/actions/sendEmail'
import toast from 'react-hot-toast'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const { ref } = useSectionInView('Contact')
  const t = useTranslations('contact')

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t('title')}</SectionHeading>
      <p>
        {t('description')}{' '}
        <a className='underline' href='mailto:ostermann.n@gmx.de'>
          ostermann.n@gmx.de
        </a>{' '}
        {t('formHint')}
      </p>
      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { error } = await sendEmail(formData)
          if (error) {
            toast.error(error)
            return
          }

          toast.success(t('successToast'))
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder={t('emailPlaceholder')}
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder={t('messagePlaceholder')}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
