import ReactDom from 'react-dom'

const ErrorMessage = () => {
    return ReactDom.createPortal(
        <div className='error-message'>
            <h1>Ocorreu um Erro.</h1>
        </div>,
        document.getElementById('error')!
    )
}

export default ErrorMessage

