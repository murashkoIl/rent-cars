export const filterManufacturers = (query: string, manufacturers: string[]) => {
  return query === ''
    ? manufacturers
    : manufacturers.filter((item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      );
}