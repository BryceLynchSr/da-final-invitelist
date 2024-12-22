import {create} from "zustand";

const useStore = create((set) => ({
    name: "",
    setName: (name) => set({name}),
    numberOfGuests: "",
    setNumberOfGuests: (numberOfGuests) => set({numberOfGuests}),
    allergies: "",
    setAllergies: (allergies) => set({allergies}),
}));

export default useStore;