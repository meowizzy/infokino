import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';
import { UIInput } from '../UI';
import styles from "./RangeSliderInput.module.scss";

export const RangeSliderInput = (props) => {
     const { fromPlaceholder, toPlaceholder, value, defaultValue, onChange } = props;

     const handleSliderChange = value => {
          onChange({
               min: value[0],
               max: value[1]
          });
     };

     const handleFromInputChange = e => {
          onChange({...value, min: Number(e.target.value)});
     };

     const handleToInputChange = e => {
          onChange({...value, max: Number(e.target.value)});
     };

     return (
          <div className={styles.wrap}>
               <div className={styles.inputs}>
                    <div className={styles.from}>
                         <UIInput 
                              placeholder={fromPlaceholder} 
                              value={value.min} 
                              onChange={handleFromInputChange}
                         />
                    </div>
                    <div className={styles.to}>
                         <UIInput 
                              placeholder={toPlaceholder} 
                              value={value.max} 
                              onChange={handleToInputChange}
                         />
                    </div>
               </div>
               <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    defaultValue={[defaultValue.min, defaultValue.max]}
                    value={[value.min, value.max]}
                    min={defaultValue.min}
                    max={defaultValue.max}
                    onChange={handleSliderChange}
               />
          </div>
     );
};


RangeSliderInput.propTypes = {
     fromPlaceholder: PropTypes.string,
     toPlaceholder: PropTypes.string,
     minValue: PropTypes.number,
     maxValue: PropTypes.number,
     onChange: PropTypes.func
};
