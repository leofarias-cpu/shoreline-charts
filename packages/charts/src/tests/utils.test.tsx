import type { SeriesOption } from 'echarts'
import { normalizeBarData } from '../utils/chart'
import { describe, expect, it } from '@vtex/shoreline-test-utils'
import { defaultTheme } from '../theme/themes'

const defaultBorder = defaultTheme.bar.itemStyle.borderRadius
const invertedBorderRadius = {
  borderRadius: [0, 0, defaultBorder[0], defaultBorder[1]],
}

describe('Normalize bar data tests', () => {
  it('Series is 1 object:', () => {
    const series1: SeriesOption = { data: [10, -2, 3, 4, -6] }
    normalizeBarData(series1)
    expect(series1).toStrictEqual({
      data: [
        10,
        { value: -2, itemStyle: invertedBorderRadius },
        3,
        4,
        { value: -6, itemStyle: invertedBorderRadius },
      ],
    })
  })

  it('Series is an array of objects of type {data: number[]}', () => {
    const series2 = [{ data: [10, -2, 3, 4, -6] }, { data: [1, 4, 6, 8, -12] }]
    normalizeBarData(series2)
    expect(series2).toStrictEqual([
      {
        data: [
          10,
          { value: -2, itemStyle: invertedBorderRadius },
          3,
          4,
          { value: -6, itemStyle: invertedBorderRadius },
        ],
      },
      { data: [1, 4, 6, 8, { value: -12, itemStyle: invertedBorderRadius }] },
    ])
  })

  it('Series is an array of objects with data being numbers and objects, should preserve series styling', () => {
    const series3 = [
      {
        data: [
          10,
          { value: -2, itemStyle: { color: '#a90000' } },
          3,
          4,
          { value: 6, itemStyle: { color: '#a90000' } },
        ],
      },
      { data: [1, 4, -6, 8, -12] },
    ]
    normalizeBarData(series3)
    console.log(JSON.stringify(series3))
    expect(series3).toStrictEqual([
      {
        data: [
          10,
          {
            value: -2,
            itemStyle: {
              color: '#a90000',
              borderRadius: invertedBorderRadius.borderRadius,
            },
          },
          3,
          4,
          { value: 6, itemStyle: { color: '#a90000' } },
        ],
      },
      {
        data: [
          1,
          4,
          { value: -6, itemStyle: invertedBorderRadius },
          8,
          { value: -12, itemStyle: invertedBorderRadius },
        ],
      },
    ])
  })
})
