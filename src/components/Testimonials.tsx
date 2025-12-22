import Image from 'next/image'

import { Container } from '@/components/Container'
import sales_per_day from '@/images/reports/sales_per_day.png'
import dispatch_times from '@/images/reports/dispatch_times.png'
import average_inventory_value from '@/images/reports/average_inventory_value.png'
import total_orders from '@/images/reports/total_orders.png'
import sales_per_platform from '@/images/reports/sales_per_platform.png'
import total_sales from '@/images/reports/total_sales.png'

const images = [
  [total_orders, sales_per_platform],
  [dispatch_times, total_sales],
  [sales_per_day, average_inventory_value],
]

export function Testimonials() {
  return (
    <section
      id="reports"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive reporting in ONE easy-to-view page.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            The streamlined reporting page simplifies data analysis, enabling
            you to make informed decisions quickly and efficiently. Get
            everything you need in ONE place to drive your business forward.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {images.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((image, imageIndex) => (
                  <li key={imageIndex}>
                    <Image className="h-auto w-full" src={image} alt="" />
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
