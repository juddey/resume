import { Colors } from '../../Themes/'

const screenHeight = window.innerHeight

const styles = {
  container: {
    flexDirection: 'column'
  },
  heading: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.background,
    height: screenHeight * 0.67
  },
  resumeTitleWrapper: {
    marginBottom: '10px'
  }
}
export default styles
