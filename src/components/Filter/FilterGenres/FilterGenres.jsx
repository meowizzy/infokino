import genresJSON from '@services/genres.json';
import { useState } from 'react';
import { useParams } from 'react-router';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { useEffect } from 'react';

const FilterGenres = () => {
	const genres = genresJSON;
	const [currentOptions, setCurrentOptions] = useState([genres[0].label]);
	const animatedComponents = makeAnimated();
	const params = useParams();

	useEffect(() => {
		setCurrentOptions([genres[0].label]);
	}, [params.type]);

	const getValue = () => {
		if (currentOptions) {
			return genres.filter(op => currentOptions.indexOf(op.value) >= 0);
		} else {
			return [];
		}
	};

	const handleChange = newValue => {
		if (newValue.length > 3) return;
		setCurrentOptions(newValue.map(option => option.value));
	};	

     return (
          <div>
			<Select components={animatedComponents} value={getValue()} onChange={handleChange} classNamePrefix="custom-select" options={genres} placeholder="Жанры" isMulti={true} isClearable={true}/>
			{ getValue().length ? <input type="hidden" name="genres.name" value={getValue().map(op => op.value).join('+')}/> : '' }
		</div>
     );
};

export default FilterGenres;