import { useState, useEffect } from "react";
import { useParams } from "react-router";
import getCurrentYear from "@helpers/getCurrentYear";
import { RangeSliderInput } from "@components/RangeSliderInput";

const FilterYear = () => {
     const range = {
          min: 1860,
          max: getCurrentYear()
     };
     const [state, setState] = useState(range);
     const params = useParams();

	useEffect(() => {
		setState(range);
	}, [params.type]);

     const handleChange = value => {
          setState({min: value.min, max: value.max});
     };

     return (
          <div>
               <RangeSliderInput 
                    fromPlaceholder="Дата от:"
                    toPlaceholder="Дата до:"
                    defaultValue={range}
                    value={state}
                    onChange={handleChange}
               />
               <input type="hidden" name="year" value={`${state.min}-${state.max}`}/>
          </div>
     )
};

export default FilterYear;