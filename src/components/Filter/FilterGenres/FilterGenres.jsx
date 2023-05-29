import { useState } from 'react';
import Select from 'react-select';

const FilterGenres = () => {
	const genres = [
		{ label: 'Все жанры', value: '' },
		{ label: 'Семейные', value: 'семейный' },
		{ label: 'Биографии', value: 'биография' },
		{ label: 'Боевики', value: 'боевик' },
		{ label: 'Вестерны', value: 'вестерн' },
		{ label: 'Военные', value: 'военный' },
		{ label: 'Детективы', value: 'детектив' },
		{ label: 'Детские', value: 'детский' },
		{ label: 'Документальные', value: 'документальный' },
		{ label: 'Драмы', value: 'драма' },
		{ label: 'Исторические', value: 'история' },
		{ label: 'Комедии', value: 'комедия' },
		{ label: 'Короткометражки', value: 'короткометражка' },
		{ label: 'Криминал', value: 'криминал' },
		{ label: 'Мелодрамы', value: 'мелодрама' },
		{ label: 'Музыкальные', value: 'музыка' },
		{ label: 'Мюзиклы', value: 'мюзикл' },
		{ label: 'Новости', value: 'новости' },
		{ label: 'Приключения', value: 'приключения' },
		{ label: 'Спортивные', value: 'спорт' },
		{ label: 'Триллеры', value: 'триллер' },
		{ label: 'Ужасы', value: 'ужасы' },
		{ label: 'Фантастика', value: 'фантастика' },
		{ label: 'Фильмы-нуар', value: 'фильм-нуар' },
		{ label: 'Фэнтези', value: 'фэнтези' },
	];
	const [currentOptions, setCurrentOptions] = useState([genres[0].label]);

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
			<Select value={getValue()} onChange={handleChange} classNamePrefix="custom-select" options={genres} placeholder="Все жанры" isMulti={true} isClearable={true}/>
			<input type="hidden" name="genres" value={getValue().map(op => op.value).join('+')}/>
		</div>
     );
};

export default FilterGenres;