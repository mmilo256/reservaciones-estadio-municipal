import Container from "./Container"

const Navbar = ({ title }) => {
    return (
        <nav className="border-b border-b-slate-200 h-12 flex items-center">
            <Container>
                <p className="text-dark font-semibold text-lg">{title}</p>
            </Container>
        </nav>
    )
}

export default Navbar