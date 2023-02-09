import React, { useState } from 'react'

import { faqsData } from './Data'
import FAQ from './FAQ'
const FAQs = () => {

    const [FaqData, setFAQData] = useState(faqsData)
  return (
    <>
      <h1>FAQs</h1> 
      {FaqData.map((Faq) => <FAQ key={Faq.id} {...Faq} />)} 
    </>
  )
}

export default FAQs;