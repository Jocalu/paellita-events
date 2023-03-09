import { User } from '../@types/User'

export const changeDateFormat = (users: User[]) => {
  return users.map((user: User) => {
    const birthdayDate = new Date(user.birthdayDate)

    return {
      ...user,
      birthdayDate: birthdayDate.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long'
      })
    }
  })
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
