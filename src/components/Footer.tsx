interface Props {
  text: string
}

const Footer = ({ text }: Props) => {
  return (
    <footer className="flex justify-center absolute inset-x-0 bottom-10  font-semibold">
      {text}
    </footer>
  )
}

export default Footer
