import { changeYearByCurrent } from './dates'
import { type CalendarEvent } from '../@types/CalendarEvent'
import { type User } from '../@types/User'

interface RequestEvent {
  htmlLink: string
}

const gapi = (window as any).gapi

const SCOPES = 'https://www.googleapis.com/auth/calendar.events'

export const addCalendarEvent = (events: CalendarEvent[]) => {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      scope: SCOPES,
      plugin_name: 'paellita-events'
    })

    gapi.client.load('calendar', 'v3')

    gapi.auth2.getAuthInstance().then(() => {
      events.forEach((event) => {
        const request = gapi.client.calendar.events.insert({
          calendarId: 'primary',
          resource: event
        })

        request.execute((event: RequestEvent) => {
          window.open(event.htmlLink)
        })
      })
    })
  })
}

export const getEventsFromUsers = (users: User[]) => {
  return users.map((user: User) => {
    const birthdayWithCurrentYear = changeYearByCurrent(user.birthdayDate)
      .toISOString()
      .slice(0, 10)
    const startDateTime = 'T10:00:00'
    const endDateTime = 'T18:00:00'
    const timeZone = 'Europe/Madrid'
    const repeatXtimes = 1

    return {
      summary: `${user.name} paellita`,
      description: `${user.name}'s birthday`,
      start: {
        dateTime: `${birthdayWithCurrentYear}${startDateTime}`,
        timeZone
      },
      end: {
        dateTime: `${birthdayWithCurrentYear}${endDateTime}`,
        timeZone
      },
      recurrence: [`RRULE:FREQ=YEARLY;COUNT=${repeatXtimes}`],
      reminders: {
        useDefault: false,
        overrides: [{ method: 'popup', minutes: 30 }]
      }
    }
  })
}
