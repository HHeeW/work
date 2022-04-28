import Contents from "./Contents"
import Footer from "./Footer"
import Header from "./Header"


const Page = ({isDark, setIsDark}) => {
  return (
    <div>
        <Header isDark={isDark} />
        <Contents isDark={isDark} />
        <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}

export default Page