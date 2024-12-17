import { createSelector } from "reselect";

export const selectContacts = (state) => state.contacts?.items || [];
export const selectFilter = (state) => state.filters?.filter || "";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name, number }) =>
      name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter)
  );
  }
);

export const selectIsLoading = (state) => state.contacts?.loading || false;

export const selectError = (state) => state.contacts?.error || null;