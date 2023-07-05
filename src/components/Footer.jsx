import '../styles/footer.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear().toString()

    return (
        <footer>
            <p>
                Daniel Saavedra <span>&#169;</span>
                <span>{currentYear}</span>
            </p>
        </footer>
    )
}

export default Footer
