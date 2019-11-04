import React, { Component } from 'react'

class CardLt extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>
                                {this.props.header}
                            </div>
                            <div className='card-body'>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardLt
