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
        <div className="hidden justify-center pt-10">
          <Button label={'Add events to the calendar'} />
        </div>
      </div>
      <Footer text={'For friends and family only'} />
    </>
  )
}

export default App
