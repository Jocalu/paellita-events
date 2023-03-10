import Button from './components/Button'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import ListItem from './components/ListItem'
import Title from './components/Title'

import { users } from './data/users.js'
import { changeDateFormat, sortByNextBirthday } from './utils/dates'
import { addCalendarEvent, getEventsFromUsers } from './utils/calendarEvents'

import { type User } from './@types/User'

const App = () => {
  const sorteredUsers = sortByNextBirthday(users)

  return (
    <>
      <Header>
        <Title />
      </Header>
      <div className="w-full flex flex-col px-4">
        <div className="flex flex-col items-center gap-y-4">
          {sorteredUsers.length ? (
            <Card title={'Birthdays'}>
              <List>
                {sorteredUsers.map((user: User) => (
                  <ListItem
                    key={user.birthdayDate + user.name}
                    name={user.name}
                    birthdayDate={changeDateFormat(user.birthdayDate)}
                    image={user.image}
                  />
                ))}
              </List>
            </Card>
          ) : null}
        </div>
        <div className="flex justify-center pt-10">
          <Button
            label={'Add events to the calendar'}
            onClick={() => addCalendarEvent(getEventsFromUsers(sorteredUsers))}
          />
        </div>
      </div>
      <Footer text={'For friends and family only'} />
    </>
  )
}

export default App
