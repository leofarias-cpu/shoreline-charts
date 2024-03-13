import { TsTable } from '@vtex/shoreline-ts-table'

export default function Page() {
  return (
    <TsTable
      columns={[
        {
          accessorKey: 'name',
          header: 'Service name',
        },
        {
          accessorKey: 'price',
          header: 'Price',
        },
      ]}
      data={[
        {
          name: 'Vercel',
          url: 'https://vercel.com',
          price: '20 USD / Dev / Year',
        },
        {
          name: 'Netlify',
          url: 'https://netlify.com',
          price: '19 USD / Dev / Year',
        },
        {
          name: 'Azion',
          url: 'https://www.azion.com',
          price: '300 USD / Year',
        },
      ]}
    />
  )
}
