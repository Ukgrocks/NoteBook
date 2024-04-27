

import AddNote from './AddNote'
import Notes from './Notes'
const HomePage = (props) => {
const {showAlert} = props;
  return (
    <>
<div >
<Notes showAlert={showAlert}/>
</div>

      </>
  )
}

export default HomePage

