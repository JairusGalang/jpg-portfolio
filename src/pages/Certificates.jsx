import React from 'react'
import CardHolder from '../components/CardHolder'
import certificatesData from '../json/certificates.json'

const Certificates = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 ">
      <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-center mb-2 sm:mb-2">Certificates</h1>
      <h6 className='font-poppins text-sm px-24 text-center mb-6 italic text-gray-500 sm:mb-8'>Throughout my academic journey, I have earned several certificates that reflect my commitment to learning. I am driven by a passion for growth, constantly seeking knowledge, and always eager to improve.
      .</h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {certificatesData.map((certificate, index) => (
          <CardHolder
            key={index}
            title={certificate.title}
            subtitle={certificate.description}
            image={certificate.image}
            useApiImage={certificate.useApiImage}
            cardWithImage={certificate.cardWithImage}
            parentFolder="Certificates"
            icons={certificate.technologies}
            className="max-w-sm mx-auto"    
            buttonText={certificate.buttonText}
            buttonUrl={certificate.buttonUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Certificates