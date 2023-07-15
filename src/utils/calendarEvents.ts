import { changeYearByCurrent } from './dates'
import { type User } from '../@types/User'

export const getEventFromUser = ({ name, birthdayDate }: User) => {
  const birthdayWithCurrentYear = changeYearByCurrent(birthdayDate)
    .toISOString()
    .slice(0, 10)
  const startDateTime = 'T10:00:00'
  const endDateTime = 'T18:00:00'
  const repeatXtimes = 10

  return {
    name: `${name} paellita`,
    description: `${name}'s birthday`,
    startDate: `${birthdayWithCurrentYear}${startDateTime}`,
    endDate: `${birthdayWithCurrentYear}${endDateTime}`,
    recurrence: `RRULE:FREQ=YEARLY;COUNT=${repeatXtimes}`
  }
}
