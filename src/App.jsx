import { useState } from 'react'
import './App.css'
let list1 = ["item1", "item2", "item3", "item4", "item5"]
let list2 = ["item11", "item12", "item13", "item14"]
function App() {
  let [singleitem, setsingleitem] = useState([])
  let [boxname, setboxname] = useState("")
  let addsingleitem = (e) => {
    setsingleitem([...singleitem, e.target.value])
    setboxname(e.target.name)
  }
  let adddata = () => {
    if (boxname === "box1") {
      list2 = [...list2, ...singleitem]
      singleitem.map((item) => {
        list1 = list1.filter((item1) => item1 !== item)
      })
      setsingleitem([])
      setboxname("")
    } else {
      singleitem.pop()
    }
  }
  let removedata = () => {
    if (boxname === "box2") {
      list1 = [...list1, ...singleitem]
      singleitem.map((item) => list2 = list2.filter((item1) => item1 !== item))
      setsingleitem([])
      setboxname("")
    } else singleitem.pop()
  }
  let addalldata = () => {
    if (list1.length > 0) {
      singleitem = [...list1]
      list1 = []
      list2 = [...list2, ...singleitem]
      setsingleitem([])
    } else {
      alert('No data to add')
    }
  }
  let removealldata = () => {
    if (list2.length > 0) {
      singleitem = [...list2]
      list2 = []
      list1 = [...list1, ...singleitem]
      setsingleitem([])
    } else {
      alert('No data to remove')
    }
  }
  return (
    <>
      <span className='largedivbox'>
        <div>
          <h1>Box 1</h1>
          <ul>
            {list1.map((data) => {
              return <button key={data} style={{ display: 'flex' }} name="box1" value={data} onClick={addsingleitem}>{data}</button>
            })}
          </ul>
        </div>
        <span style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <button onClick={adddata}>Add</button>
          <button onClick={removedata}>Remove</button>
          <button onClick={addalldata}>Add All</button>
          <button onClick={removealldata}>Remove All</button>
        </span>
        <div >
          <h1>Box 2</h1>
          <ul>
            {list2.map((data) => {
              return <button key={data} style={{ display: 'flex' }} name="box2" value={data} onClick={addsingleitem}>{data}</button>
            })}
          </ul>
        </div>
      </span>
    </>
  )
}

export default App
