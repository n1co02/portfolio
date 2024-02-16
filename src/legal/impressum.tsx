import React from 'react'

export default function Impressum() {
  return (
    <div>
      <div>
        <h1 className='text-xl font-semibold mb-4'>Impressum</h1>
        <h2 className='text-lg font-semibold mb-4'>Angaben gemäß § 5 TMG</h2>
        <div className='text-left inline-block text-sm align-top'>
          <p className='mb-2'>
            Nicolas Ostermann
            <br />
            Hardtstraße 61
            <br />
            73479 Ellwangen
          </p>
          <h2 className='text-lg font-semibold mb-2'>Kontakt</h2>
          <p className='mb-2'>
            Telefon: +49 176 323 63009
            <br />
            E-Mail: ostermann.n@gmx.de
          </p>
          <p className='mt-4'>
            Quelle:{' '}
            <a
              href='https://www.e-recht24.de'
              className='text-blue-600 hover:text-blue-800'
            >
              eRecht24
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
