import Notes from './Notes';

const Home = (props) => {
  const {settingAlert} = props
  return (
    <>

      <Notes settingAlert={settingAlert}/>

    </>
  )
}

export default Home
