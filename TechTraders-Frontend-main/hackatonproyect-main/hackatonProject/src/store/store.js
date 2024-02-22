import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const initialState = {
  slides: [
    {
      title: "Mobile Phone",
      image: "./src/assets/image/phone.jpg",
      description: "A mobile phone description",
      link: "/phone"
    },
    {
      title: "Console",
      image: "./src/assets/image/xbox.jpg",
      description: "A console description",
      link: "/console"
    },
    {
      title: "Ordenadores",
      image: "./src/assets/image/ordenador.jpg",
      description: "A computer description",
      link: "/ordenadores" 
    },
    {
      title: "Tablet",
      image: "./src/assets/image/tablet.jpg",
      description: "A tablet description",
      link: "/Tablet"
    },
    {
      title: "HeadPhone",
      image: "./src/assets/image/headphone.jpg",
      description: "A headphone description",
      link: "/head"
    }
  ],
  slideIndex: 0
};

const slidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT':
      return { ...state, slideIndex: (state.slideIndex + 1) % state.slides.length };
    case 'PREV':
      return { ...state, slideIndex: (state.slideIndex - 1 + state.slides.length) % state.slides.length };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

