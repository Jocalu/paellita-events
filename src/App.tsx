import { User } from './@types/User'
import Button from './components/Button'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import ListItem from './components/ListItem'
import Title from './components/Title'

import { users } from './data/users.js'
import { changeDateFormat, sortByNextBirthday } from './utils/dates'

const transformedUsers = changeDateFormat(sortByNextBirthday(users))

const App = () => {
  const gapi = (window as any).gapi
  const CLIENT_ID =
    '736340294046-qf6c4u0s4s5obusr2udgbrsd4m83pho5.apps.googleusercontent.com'
  const API_KEY = 'AIzaSyB3RaDKH6350LaEvgHNahNyrvhCs8JN6y0'
  const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
  ]
  const SCOPES = 'https://www.googleapis.com/auth/calendar.events'

  const handleClick = () => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      })

      gapi.client.load('calendar', 'v3')

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const event = {
            summary: 'Awesome Event!',
            description: 'Really great refreshments',
            start: {
              dateTime: '2023-06-28T09:00:00-07:00',
              timeZone: 'Europe/Madrid'
            },
            end: {
              dateTime: '2023-06-28T17:00:00-07:00',
              timeZone: 'Europe/Madrid'
            },
            recurrence: ['RRULE:FREQ=YEARLY;COUNT=2'],
            reminders: {
              useDefault: false,
              overrides: [{ method: 'popup', minutes: 10 }]
            }
          }

          const request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event
          })

          request.execute((event: any) => {
            console.log('event', event)
            window.open(event.htmlLink)
          })
        })
    })
  }

  return (
    <>
      <Header>
        <Title />
      </Header>
      <div className="w-full flex flex-col px-4">
        <div className="flex flex-col items-center gap-y-4">
          <Card title={'Birthdays'}>
            <List>
              {transformedUsers.map((user: User) => (
                <ListItem
                  key={user.birthdayDate + user.name}
                  name={user.name}
                  birthdayDate={user.birthdayDate}
                  image={user.image}
                />
              ))}
            </List>
          </Card>
        </div>
        <div className="flex justify-center pt-10">
          <Button label={'Add events to the calendar'} onClick={handleClick} />
        </div>
      </div>
      <Footer text={'For friends and family only'} />
    </>
  )
}

export default App
