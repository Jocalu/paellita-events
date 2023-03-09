interface Props {
  children: React.ReactNode
}

const List = ({ children }: Props) => {
  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {children}
      </ul>
    </div>
  )
}

export default List
