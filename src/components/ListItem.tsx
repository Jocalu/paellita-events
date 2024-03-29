import { AddToCalendarButton } from 'add-to-calendar-button-react'

import { getEventFromUser } from '../utils/calendarEvents'
import { changeDateFormat } from '../utils/dates'

import { User } from '../@types/User'

const ListItem = ({ name, birthdayDate, image }: User) => {
  const event = getEventFromUser({ name, birthdayDate } as User)

  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="w-10 h-10 rounded-full" src={image} alt={name} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {name}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {changeDateFormat(birthdayDate)}
        </div>

        <AddToCalendarButton
          name={event.name}
          description={event.description}
          startDate={event.startDate}
          endDate={event.endDate}
          recurrence={event.recurrence}
          options="Google"
          timeZone="Europe/Madrid"
          hideTextLabelButton
          buttonsList
          lightMode="system"
          buttonStyle="round"
          size="2"
        />
      </div>
    </li>
  )
}

export default ListItem
