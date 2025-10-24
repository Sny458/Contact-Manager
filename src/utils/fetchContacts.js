import { MOCK_CONTACTS } from '../data/mockContacts';

export const fetchContacts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_CONTACTS), 800);
  });
};
