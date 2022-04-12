import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { members } from "../../members"
import './styles.css'

const Company = () => {

    const params = useParams()
    const member = members.find(member => member.id === params.id )

    return(
        <div className="container">
            <div className="main-customer">
                <h1 className="title">Detalhes da Empresa</h1>
                <p className="member-name">Nome da empresa: {member && member.name}</p>
                <Link className="link" to='/'>Voltar</Link>
            </div>
        </div>
    )
}
export default Company