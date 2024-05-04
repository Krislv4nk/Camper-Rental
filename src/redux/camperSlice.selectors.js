import { createSelector } from '@reduxjs/toolkit';


export const selectCampers = state => state.campers.campers;

export const selectCampersFavorites = createSelector(
    selectCampers,
    contacts => contacts.items
);

export const selectFilter = state => state.filter.filter;

export const selectFilterValue = createSelector(
    selectFilter,
    filter => filter.filter
)
export const selectFilteredContacts = createSelector(
    [selectCampers, selectFilter],
    (contacts, filter) => {
      if (!Array.isArray(contacts)) {
        contacts = [];
    }
    
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    }
  );