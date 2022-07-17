import {useState} from 'react'
import { Nav, Tab } from 'react-bootstrap'

function Detail() {

let [tab, setTab] = useState(0);

return (
    <div>
        <Nav variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link onClick={()=>{
            setTab(0)
        }} eventKey="link-0">버튼 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{
            setTab(1)
        }} eventKey="link-1">버튼 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{
            setTab(2)
        }} eventKey="link-2">버튼 3</Nav.Link>
      </Nav.Item>
    </Nav>
    
    <TabBox tab={tab}/>
    
    </div>
)

  function TabBox(props){
    if (props.tab == 0) {
        return <div>내용 1</div>
    } else if(props.tab == 1) {
        return <div>내용 2</div>
    } else if(props.tab == 2) {
        return <div>내용 3</div>
    }
  }
}

export default Detail