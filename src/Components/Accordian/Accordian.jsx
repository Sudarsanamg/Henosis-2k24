import React from 'react'
import Datas from '../../Data'
import './Accordian.css'
const Accordian = () => {

  const [Selected,setSelected]=React.useState(null)
  const [Enable,SetEnable]=React.useState(false);
  const [Mselect,setMselect]=React.useState([])
  function handleclick(id)
  {
    setSelected(id===Selected ? null:id)
  }

  function multiclick(id)
  {

    if(Mselect.includes(id))
    {
      let arr=[...Mselect]
      let ind=arr.indexOf(id);
      arr.splice(ind,1)
      console.log(arr)
      setMselect(arr);
    }
    else
    {
    let arr=[...Mselect];
    arr.push(id)
    console.log(arr)
    setMselect(arr)

    }

    
  }


  return (
    <div className="container">
    <div className="wrapper">

        <div className='h1'>Frequently Asked  <span className="gradient-text">Questions</span>  </div>
        {Datas && Datas.length >0 ?

        Datas.map(items => 
          <div className='items'>
            <div  onClick={Enable===true ? ()=>multiclick(items.id) :()=> handleclick(items.id)} className='Question h4'>
              <span className='gradient-text'>{items.label}</span>
              &nbsp;
              <span className='gradient-text'>+</span>
            </div>
            
            {Enable ===false && Selected === items.id ?  <div className="text-secondary d-flex h5 transition-1">{items.content}</div>:null }
            <hr />
          </div>)
        :<div>No content</div>}
    </div>
    </div>
  )
}

export default Accordian