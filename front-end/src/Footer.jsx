const Footer = () => {

  const year = new Date()

  return (
    <footer className="bg-red-300 p-2 flex justify-center">
      copyright &copy; {year.getFullYear()}
    </footer>
  )
}

export default Footer
