import { Button } from "@/components/ui/button"
import Link from "next/link"


const HomePage = () => {
  return (
    <div>
      <h1><Link href={"#"}>Home Page</Link></h1>
      <Button>Hello How Are You?</Button>
    </div>
  )
}

export default HomePage
