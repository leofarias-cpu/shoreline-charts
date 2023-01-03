import React, { useEffect, useState } from 'react'
import {
  createColumns,
  Table,
  TBody,
  TBodyRow,
  TBodyCell,
  THead,
  THeadCell,
  useTableState,
  Anchor,
  Heading,
  Box,
  DataView,
  useDataViewState,
} from '@vtex/admin-ui'

interface ReleaseNote {
  name: string
  published_at: string
  html_url: string
}

export function ReleaseNotes() {
  const [releases, setReleases] = useState<ReleaseNote[]>([])
  const view = useDataViewState({
    loading: true,
    error: null,
    empty: null,
    notFound: false,
  })

  const columns = createColumns<ReleaseNote>([
    {
      id: 'name',
      header: 'Version',
    },
    {
      id: 'published_at',
      header: 'Publish Date',
      resolver: {
        type: 'date',
        locale: 'en-US',
      },
    },
    {
      id: 'html_url',
      header: 'Details',
      resolver: {
        type: 'root',
        render: ({ item }) => {
          return (
            <Anchor href={item.html_url} target="blank">
              Github release
            </Anchor>
          )
        },
      },
    },
  ])

  const { data, getBodyCell, getHeadCell, getTable } = useTableState({
    items: releases,
    columns,
    status: view.status,
  })

  useEffect(() => {
    if (releases.length === 0) return

    view.setStatus({ type: 'ready' })
  }, [releases])

  useEffect(() => {
    fetch('https://api.github.com/repos/vtex/admin-ui/releases')
      .then((response) => response.json())
      .then((response) => {
        setReleases(response)
      })
  }, [])

  return (
    <DataView state={view}>
      <Box
        csx={{
          padding: '$space-3 $space-4',
        }}
      >
        <Heading>Releases table</Heading>
        <Table {...getTable()}>
          <THead>
            {columns.map((column) => (
              <THeadCell {...getHeadCell(column)} />
            ))}
          </THead>
          <TBody>
            {data.map((item) => {
              return (
                <TBodyRow key={item.html_url}>
                  {columns.map((column) => {
                    return <TBodyCell {...getBodyCell(column, item)} />
                  })}
                </TBodyRow>
              )
            })}
          </TBody>
        </Table>
      </Box>
    </DataView>
  )
}
