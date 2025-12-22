import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How does OneBrick integrate with existing online platforms?',
      answer:
        'OneBrick seamlessly integrates with major online marketplaces and platforms using API, allowing you to manage all your sales channels from one interface.',
    },
    {
      question: 'Is OneBrick suitable for all business owners?',
      answer:
        'Absolutely! OneBrick is designed to cater to stores of all sizes, from small hobbyists to large businesses, providing scalable solutions to meet your specific needs.',
    },
    {
      question: 'Is there a mobile version of OneBrick available?',
      answer:
        'While we do not currently have a mobile app, OneBrick is designed to work well on most screen sizes, providing access to essential functions from anywhere. Tablets and computers currently works best.',
    },
  ],
  [
    {
      question: 'How often is OneBrick updated?',
      answer:
        'We regularly update OneBrick to introduce new features, improve existing functionalities, and ensure compatibility with the latest market trends and technologies.  Most updates will occur at 5:00pm PDT on Wednesdays.  For larger releases, we will have a new release version announced.',
    },
    {
      question: 'Is there a trial period for OneBrick?',
      answer:
        'Yes, we offer a free trial period for you to explore the features and benefits of OneBrick before making a commitment.',
    },
    {
      question:
        'How long do I need to close my store when setting up my account?',
      answer:
        'OneBrick was designed with a streamlined onboarding process, meaning your stores should only need to be closed for a few minutes while we transition your current inventory into Complex Lots.',
    },
  ],
  [
    {
      question: 'What are the hardware requirements to run OneBrick?',
      answer:
        'OneBrick is a cloud-based software, so it does not require specific hardware. You can access OneBrick from any modern device with internet connectivity and a web browser.',
    },
    {
      question:
        'Is there a limit to the number of users who can access my store on OneBrick?',
      answer:
        'OneBrick offers different subscription plans with varying user access levels, depending on the size and needs of your business.',
    },
    {
      question:
        "Can I use OneBrick for my store if I'm not located in the United States?",
      answer:
        'As of now, OneBrick only supports U.S. based stores, however we do plan to open up to more sellers worldwide in the future.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, reach out to us at:
            support@onebrick.app, and we'll get back to you soon!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
