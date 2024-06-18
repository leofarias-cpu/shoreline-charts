import { Chart } from '../index'

export default {
  title: 'Charts/bar',
}

export function Basic() {
  return (
    <Chart
      option={{
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        series: { data: [1, 2, 3, 4, 5, 6, 7] },
      }}
      chartConfig={{ type: 'bar' }}
      style={{ height: 550 }}
    />
  )
}

export function Horizontal() {
  return (
    <Chart
      option={{
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        series: [
          { data: [1, 2, 3, 4, 5, 6, 7] },
          { data: [1, 4, 2, 1, 4, 3, 5] },
        ],
      }}
      chartConfig={{ type: 'bar', variant: 'horizontal' }}
      style={{ height: 550 }}
    />
  )
}

export function MultiType() {
  return (
    <Chart
      option={{
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        series: [
          { data: [1, 2, 3, 4, 5, 6, 7] },
          { data: [1, 4, 2, 1, 4, 3, 5], type: 'line' },
        ],
      }}
      chartConfig={{ type: 'bar', variant: 'default' }}
      style={{ height: 550 }}
    />
  )
}
