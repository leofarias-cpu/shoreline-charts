import { Chart } from '@vtex/shoreline-charts'

export default function Example() {
  return (
    <Chart
      chartConfig={{ type: 'bar', variant: 'default' }}
      option={{
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        series: [
          {
            data: [1, 2, 3, 4, 5, 6, 7],
            itemStyle: {
              borderRadius: [10, 10, 0, 0],
            },
          },
        ],
        barGap: '5%',
        color: ['#D95030'],
      }}
    />
  )
}
