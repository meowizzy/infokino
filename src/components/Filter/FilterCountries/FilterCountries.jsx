import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { getCountriesAction } from '@store/reducers/kinopoisk/countriesReducer';

const FilterCountries = () => {
	const [currentOptions, setCurrentOptions] = useState(null);
	const animatedComponents = makeAnimated();
	const state = useSelector(state => state.countriesReducer);
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		setCurrentOptions(null);
	}, [params.type]);

     useEffect(() => {
          dispatch(getCountriesAction());
          // if (state && !countries) setCountries(state);
     }, []);

	const getValue = () => {
		if (currentOptions) {
			return getOptions().filter(op => currentOptions.indexOf(op.value) >= 0);
		} else {
			return [];
		}
	};

     const getOptions = () => {
          if (!state?.countries) return;

          const newCountries = state?.countries.map(item => {
               return { label: item.name, value: item.name }
          });

          return newCountries;
     };

	const handleChange = newValue => {
		setCurrentOptions(newValue.map(option => option.value));
	};

     return (
          <div>
			<Select
                    components={animatedComponents}
                    value={getValue()}
                    onChange={handleChange}
                    classNamePrefix="custom-select"
                    options={getOptions()}
                    placeholder="Страны"
                    isMulti={true}
                    isLoading={state.isLoading}
                    isClearable={true}/>
			{ state?.countries && getValue().length ? <input type="hidden" name="countries.name" value={getValue().map(op => op.value).join('+')}/> : '' }
		</div>
     );
};

export default FilterCountries;