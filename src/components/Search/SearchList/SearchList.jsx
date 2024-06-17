import styles from './SearchList.module.scss';

const SearchList = ({ Item, data, title }) => {
     return (
          <div className={styles.wrap}>
               <p className={styles.title}>{title}</p>
               <ul className={styles.list}>
                    {data.map(item => <Item key={item.id} data={item}/>)}
               </ul>
          </div>
     );
};


export default SearchList;