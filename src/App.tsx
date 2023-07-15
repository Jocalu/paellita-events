import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import ListItem from './components/ListItem'
import Title from './components/Title'

import { sortByNextBirthday } from './utils/dates'

import { users } from './data/users.js'

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
                {sorteredUsers.map(({ name, birthdayDate, image }: User) => (
                  <ListItem
                    key={birthdayDate + name}
                    name={name}
                    birthdayDate={birthdayDate}
                    image={image}
                  />
                ))}
              </List>
            </Card>
          ) : null}
        </div>
      </div>
      <Footer text={'For friends and family only'} />
    </>
  )
}

export default App
