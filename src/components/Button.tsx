interface Props {
  label: string
  onClick?: () => void
}

const Button = ({ label, onClick }: Props) => {
  return (
    <button
      className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white"
      onClick={onClick}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
        {label}
      </span>
    </button>
  )
}

export default Button
