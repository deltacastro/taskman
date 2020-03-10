import React, {Component} from 'react'

class FormModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const formContent = <FormContent></FormContent>
        const modal = this.props.showModal ? <div>{formContent}</div> : null
        return (
            <div>
                {modal}
            </div>
        )
    }
}

export default FormModal
