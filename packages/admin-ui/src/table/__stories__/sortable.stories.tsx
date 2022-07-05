import React from 'react'
import type { Meta } from '@storybook/react'
import faker from 'faker'

import { DataGrid } from '../index'
import { useDataGridState } from '../hooks/use-table-state'
import { createColumns } from '../createColumns'

export default {
  title: 'admin-ui-review/Table/sortable',
  component: DataGrid,
} as Meta

interface Item {
  id: string
  name: string
  lastSale: string
  price: string
}

const items = [...Array(10).keys()].map((id) => {
  return {
    id: `${id}`,
    name: faker.commerce.productName(),
    lastSale: faker.date.past().toDateString(),
    price: faker.commerce.price(),
  }
})

const columns = createColumns<Item>([
  {
    id: 'name',
    header: 'Product Name',
    compare: (a, b) => b.name.localeCompare(a.name),
  },
  {
    id: 'lastSale',
    header: 'Last Sale',
  },
  {
    id: 'price',
    header: 'Price',
    resolver: {
      type: 'currency',
      locale: 'en-US',
      currency: 'USD',
    },
    compare: (a, b) => parseInt(b.price, 10) - parseInt(a.price, 10),
  },
])

export function CompareFunction() {
  const grid = useDataGridState<Item>({
    columns,
    items,
  })

  return <DataGrid state={grid} csx={{ width: 560 }} />
}
