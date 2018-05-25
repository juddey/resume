import React from 'react'
import { Header } from '../Components'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

export class RootScreen extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  // componentWillReceiveProps (newProps) {
  //  this.setState(newProps.something)
  // }

  render () {
    return (
      <div style={{ flex: 1 }}>
        <Header />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(
  injectIntl(RootScreen)
)
