import { createSlice } from '@reduxjs/toolkit';

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
      image: "../src/assets/image/tablet.jpg",
      description: "A tablet description",
      link: "/Tablet"
    },
    {
      title: "HeadPhone",
      image: "./src/assets/imag/headphone.jpg",
      description: "A headphone description",
      link: "/head"
    }
  ],
  slideIndex: 0
};

const slidesSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
    nextSlide: state => {
      state.slideIndex = (state.slideIndex + 1) % state.slides.length;
    },
    prevSlide: state => {
      state.slideIndex = (state.slideIndex - 1 + state.slides.length) % state.slides.length;
    }
  }
});

export const { nextSlide, prevSlide } = slidesSlice.actions;
export default slidesSlice.reducer;

