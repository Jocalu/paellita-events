import { type User } from '../@types/User'

export const changeDateFormat = (date: string) => {
  const dateToFormat = new Date(date)

  return dateToFormat.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long'
  })
}

export const changeYearByCurrent = (date: string) => {
  const dateToFormat = new Date(date)
  const now = new Date()

  return new Date(
    now.getFullYear(),
    dateToFormat.getMonth(),
    dateToFormat.getDate() + 1
  )
}

export const sortByNextBirthday = (users: User[]) => {
  const now = new Date()

  return users
    .map((user) => {
      const birthday = new Date(user.birthdayDate)
      const nextBirthday = new Date(
        now.getFullYear(),
        birthday.getMonth(),
        birthday.getDate()
      )
      if (nextBirthday < now) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1)
      }
      return {
        ...user,
        nextBirthday
      }
    })
    .sort((a, b) => Number(a.nextBirthday) - Number(b.nextBirthday))
}
