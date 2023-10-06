import styles from "./button.module.css";

const Button = ({ children, fullwidth, ...props }) => {
  return (
    <div className={`${styles.button} ${fullwidth && styles.fullwidth} `} {...props}>
      {children}
    </div>
  );
};

export default Button;
