import React from 'react'
import ReactDom from 'react-dom'

interface IProps {
    children: React.ReactNode
}

class ErrorBoundary extends React.Component<IProps> {
    state = { hasError: false }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error('Erro Identificado na Aplicação: ', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return ReactDom.createPortal(
                <h1>Ocorreu um Problema</h1>,
                document.getElementById('error') as HTMLElement
            )
        }
        return this.props.children
    }
}


export default ErrorBoundary
