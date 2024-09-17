// Turns date string into more readable form
export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };
  
  // Capitalizes the first letter of each word in a string
  export const capitalizeWords = (str: string): string =>
    str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  
  // Sorts objects in an array by a specific key, in ascending or descending order
  export const sortByKey = <T>(array: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] => {
    return array.sort((a, b) => {
      const valA = a[key] instanceof String ? a[key].toString().toLowerCase() : a[key];
      const valB = b[key] instanceof String ? b[key].toString().toLowerCase() : b[key];
  
      if (valA < valB) {
        return order === 'asc' ? -1 : 1;
      }
      if (valA > valB) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };
  
  // Formats numbers with commas for readability
  export const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };
  
  // Creates a full name from first and last names, capitalizing properly
  export const formatFullName = (firstName: string, lastName: string): string => {
    return `${capitalizeWords(firstName)} ${capitalizeWords(lastName)}`;
  };