import { memo } from "react";
import KunIcon from "@/components/Kun-icon/Kun-icon";


const App = memo(() => {
  return (
    <div className="app">
      <KunIcon icon="coffee" size="2x" type="danger"/>
    </div>
  )
})

export default App;