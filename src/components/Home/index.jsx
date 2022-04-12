import { Link } from "react-router-dom";
import './styles.css'

const Home = ({members}) => {

  const renderMembers = members.map((member) => {
    return member.type === 'pj' ? <Link className="link" to={`/company/${member.id}`} key={member.name}>{member.name}</Link> :
    <Link className="link" to={`/customer/${member.id}`} key={member.id}>{member.name}</Link>
  })

  return(
    <div className="main">
      <h1 className="title-home">Page Home</h1>
      <div className="members-div">
        {renderMembers}
      </div>
    </div>
  )
}
export default Home