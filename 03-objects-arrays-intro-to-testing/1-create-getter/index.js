/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    
  const properties = path.split('.');

    return (obj) => {
      let curientPath = obj;
      
      for(const property of properties){
        
        if(!curientPath.hasOwnProperty(property)){
          return;
        }
        curientPath = curientPath[property]; 
      }
      return curientPath;   
    }
}
