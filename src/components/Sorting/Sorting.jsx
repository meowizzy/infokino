import { UISelect } from "@components/UI";
import useFilter from '@hooks/useFilter';

export const Sorting = () => {
     const sortingList = [
          {title: "Рекомендуемые", param: ''},
          {title: "По дате", param: 'year'},
          {title: "По рейтингу", param: 'rating.kp'}
     ];
     const { setSearchQuery } = useFilter();
     
     const handleSelectChange = option => {
          setSearchQuery({
               sorting: option.param
          });
     };

     return (
          <div style={{maxWidth: "220px", width: '100%'}}>
               <UISelect 
                    options={sortingList} 
                    onChange={handleSelectChange} 
               />
          </div>
     );
};