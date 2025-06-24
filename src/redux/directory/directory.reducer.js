const INITIAL_STATE = {
  sections: [
    {
      title: 'T-Shirt Waale Look',
      imageUrl: '/assets/TShirtLanding.png',
      id: 1,
      linkUrl: 'shop/tshirts'
    },
    {
      title: 'Thandi Hoodie Vibes',
      imageUrl: '/assets/HoodieLanding.png',
      id: 2,
      linkUrl: 'shop/hoodies'
    },
    {
      title: 'Jacket Mein Swag',
      imageUrl: '/assets/JacketLanding.png',
      id: 3,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'Headwrap Fashion Yatri',
      imageUrl: '/assets/WrapLanding.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/headwraps'
    },
    {
      title: 'Topi Pehnke Nikle',
      imageUrl: '/assets/CapLanding.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/caps'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
