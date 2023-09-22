import styles from './button.module.css'

const Button = ({children, fullwidth}) => {
  return (
    <div className={`${styles.button} ${fullwidth && styles.fullwidth} `}>{children}</div>
  )
}

export default Button
