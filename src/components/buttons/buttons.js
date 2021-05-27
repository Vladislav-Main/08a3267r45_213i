import { useDispatch } from 'react-redux';
import { setSelected } from '../../redux/actions';

const Buttons = ({ employee }) => {
  const dispatch = useDispatch();
  return (
    <div key="buttons">
      <p className="button">
        <input
          tabIndex="selector"
          type="radio"
          name={employee.id}
          value="not active"
          checked={!employee.selected}
          onChange={() => {
            dispatch(setSelected(employee.id, false));
          }}
        />
        <label htmlFor="not active"> not active</label>
      </p>
      <p className="button">
        <input
          tabIndex="selector"
          type="radio"
          name={employee.id}
          value="active"
          checked={employee.selected}
          onChange={() => {
            dispatch(setSelected(employee.id, true));
          }}
        />
        <label htmlFor="active"> active</label>
      </p>
    </div>
  );
};

export default Buttons;
