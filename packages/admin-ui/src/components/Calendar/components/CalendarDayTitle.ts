import { jsx } from '@vtex/admin-ui-react'
import { Role } from 'reakit/Role'

import * as style from './Calendar.style'
import type { CalendarStateReturn } from './CalendarState'

export const CalendarDayTitle = jsx(Role)(style.calendarDayTitle, {
  memoize: true,
  options: ['state', 'dayIndex'],
  useOptions(options: CalendarDayTitleOptions, props) {
    const {
      state: { weekDays },
      dayIndex,
    } = options

    return {
      'aria-label': weekDays?.[dayIndex]?.title,
      ...props,
    }
  },
})

export type CalendarDayTitleOptions = {
  dayIndex: number
  state: CalendarStateReturn
}
