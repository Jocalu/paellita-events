import Title from './components/Title'
import Footer from './components/Footer'
import ListItem from './components/ListItem'
import Button from './components/Button'
import List from './components/List'
import Card from './components/Card'
import Header from './components/Header'
import { users } from './db/users.json'

interface User {
	name: string
	birthdayDate: string
	image: string
}

const App = () => {
	return (
		<>
			<Header>
				<Title />
			</Header>
			<div className="w-full p-4 flex flex-col">
				<div className="flex flex-col items-center gap-y-4">
					<Card title={'Birthdays'}>
						<List>
							{users.map((user: User) => (
								<ListItem
									key={user.birthdayDate}
									name={user.name}
									birthdayDate={user.birthdayDate}
									image={user.image}
								/>
							))}
						</List>
					</Card>
				</div>
				<div className="flex justify-center pt-10">
					<Button label={'Add events to the calendar'} />
				</div>
				<Footer text={'For friends and family only'} />
			</div>
		</>
	)
}

export default App
