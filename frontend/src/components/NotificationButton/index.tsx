import notifyIcon from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
  return (
    <div className="wst-red-btn">
      <img src={notifyIcon} alt="Notify" />
    </div>
  )
}

export default NotificationButton
