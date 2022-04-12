import { useParams } from "react-router-dom"
import { members } from "../../members"
import { Link } from "react-router-dom"
import './styles.css'

const Customer = () => {

    const params = useParams()
    const member = members.find(member => member.id === params.id )

    return(
        <div className="container">
            <div className="main-customer">
                <h1 className="title">Detalhes do cliente</h1>
                <p className="member-name">Nome: {member && member.name}</p>
                <Link className="link" to='/'>Voltar</Link>
            </div>
        </div>
    )
}
export default Customer