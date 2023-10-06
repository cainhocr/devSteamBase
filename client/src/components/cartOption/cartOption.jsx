import styles from "./cartOption.module.css";

const CartOption = ({ img, title, price, onRemove }) => {
  return (
    <div className={styles.option}>
      <img
        src={`/src/assets/products/${img}.png`}
        alt={title}
        width={72}
        height={74}
      />
      <div className={styles.info}>
        <h3>{title}</h3>
        <h3>R${price.toFixed(2).replace(".",",")}</h3>
        <p onClick={onRemove}>Remover</p>
      </div>
    </div>
  );
};

CartOption.defaultProps = {
    img:"gameOver",
    price: 90.99,
    title: "CS:GO",
    
}


export default CartOption;
