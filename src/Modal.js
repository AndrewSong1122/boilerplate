import ReactDOM from 'react-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '1%',
    zIndex: 1000
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

  const CLOSE_BUTTON_STYLES = {
    marginLeft: '80%',
    float:'right'
  }

  const CONTENT_STYLES = {
    marginTop:'10%'
  }

  const defaultContent = () => {
    return(
      <div>This is a modal! Pass a component via props</div>
    );
  }

export const Modal = ({child=defaultContent, display, handleClose, domNode='root'}) => {
    if(!display) return null;

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
            <button style={CLOSE_BUTTON_STYLES} onClick={handleClose}>X</button>
                <div style={CONTENT_STYLES}>{child()}</div>
            </div>
        </>,
        document.getElementById(domNode)
    );
}