import './App.css'

function App() {
  return (
    <>
      <div className={'container'}>
        {/*<a href="https://google.com" target="_blank">*/}
        {/*  <img src={import.meta.env.BASE_URL + "/BookClubLogo_BookBeerBullshit.png"} className="logo" alt="Book club logo" />*/}
        {/*</a>*/}
      </div>
      <h1>Books, Beer, and Bullshit</h1>
      <a className="" href={import.meta.env.BASE_URL + "/books"}>books</a>
    </>
  )
}

export default App
