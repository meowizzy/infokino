import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { getCountriesAction } from '@store/reducers/countriesReducer';

const FilterCountries = () => {
	const [countries, setCountries] = useState(null);
	const [currentOptions, setCurrentOptions] = useState(null);
	const animatedComponents = makeAnimated();
     const state = useSelector(state => state.countriesReducer.countries);
     const dispatch = useDispatch();
     const params = useParams();

	useEffect(() => {
		setCurrentOptions(null);
	}, [params.type]);

	const getValue = () => {
		if (currentOptions) {
			return getOptions().filter(op => currentOptions.indexOf(op.value) >= 0);
		} else {
			return [];
		}
	};

     const getOptions = () => {
          if (!countries) return;

          const newCountries = countries.map(item => {
               return { label: item.name, value: item.name }
          });

          return newCountries;
     };

	const handleChange = newValue => {
		setCurrentOptions(newValue.map(option => option.value));
	};	

     useEffect(() => {
          if (!state) dispatch(getCountriesAction());
          if (state && !countries) setCountries(state);
     }, [state]);

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
                    isClearable={true}/>
			{ countries && getValue().length ? <input type="hidden" name="countries.name" value={getValue().map(op => op.value).join('+')}/> : '' }
		</div> 
     );
};

export default FilterCountries;