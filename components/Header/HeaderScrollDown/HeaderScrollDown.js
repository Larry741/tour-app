
import classes from "./HeaderScrollDown.module.css";

const HeaderScrollDown = () => {

  return (
    <div className={classes["header__direction"]}>
      <span className="material-icons">keyboard_double_arrow_down</span>
    </div>
  );
}

export default HeaderScrollDown;