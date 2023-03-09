interface Props {
  text: string
}

const Footer = ({ text }: Props) => {
  return (
    <footer className="flex justify-center pt-6 font-semibold">{text}</footer>
  )
}

export default Footer
