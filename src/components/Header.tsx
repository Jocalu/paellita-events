interface Props {
  children: React.ReactNode
}

const Header = ({ children }: Props) => {
  return <header className="flex justify-center pt-10 py-6">{children}</header>
}

export default Header
