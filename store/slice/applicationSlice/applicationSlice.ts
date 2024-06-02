import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type Language = {
  title: string;
  flagIcon: string;
};

type SelectedLanguageStore = {
  [key: string]: Language;
};

type ApplicationState = {
  selectedLanguageStore: SelectedLanguageStore;
  selectedPersonStore: string;
};

const initialState: ApplicationState = {
    selectedLanguageStore: {
        en: {
            title: "English",
            flagIcon: "/images/common/flags/en.svg",
        }
    },
    selectedPersonStore: "krishna",
};

const applicationSlice = createSlice({
  name: "applicationSlice",
  initialState,
  reducers: {
    setSelectedLanguageStore: (state, action: PayloadAction<SelectedLanguageStore>) => {
      return { ...state, selectedLanguageStore: action.payload };
    },
    setSelectedPersonStore: (state, action: PayloadAction<string>) => {
      state.selectedPersonStore = action.payload;
    }
  },
});

export const { setSelectedLanguageStore, setSelectedPersonStore } = applicationSlice.actions;
export default applicationSlice.reducer;

