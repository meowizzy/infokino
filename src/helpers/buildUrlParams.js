import { map } from "lodash";

const buildUrlParams = filters => {
     const newFilters = {};

     for (let filter in filters) {
          if (filter !== 'sorting' && filters[filter] !== null) {
               newFilters[filter] = filters[filter];
          }
     }

     for (let filter in newFilters) {
          if (newFilters[filter] !== null && typeof newFilters[filter] === "string" && newFilters[filter].includes('+')) {
               newFilters[filter] = newFilters[filter].split('+');
          }
     }

     const buildParams = (data) => {
          const params = new URLSearchParams();

          map(data, (value, key) => {
               if (Array.isArray(data[key])) {
                    map(value, item => params.append(key, item));
               } else {
                    params.append(key, value);
               }
          });

          return params;
     };


     return buildParams(newFilters).toString();
}

export default buildUrlParams;