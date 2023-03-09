interface Props {
  children: React.ReactNode
}

const Header = ({ children }: Props) => {
  return <header className="flex justify-center py-10">{children}</header>
}

export default Header
