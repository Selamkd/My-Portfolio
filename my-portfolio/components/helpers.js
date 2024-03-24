export const getPositionAvatar = (scrolled) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (scrolled) {
    if (windowWidth > 1400) {
      return { x: '-160%', y: '-50%', scale: 2 };
    } else if (windowWidth < 1400 && windowWidth > 550) {
      return { x: '-106%', y: '-20%', scale: 1.1 };
    } else {
      if (windowHeight > 800) {
        return { x: '-100%', y: '-50%', scale: 1 };
      } else if (windowHeight <= 800 && windowHeight > 600) {
        return { x: '-100%', y: '-40%', scale: 0.9 };
      } else {
        return { x: '180px', y: '190px', scale: 0.8 };
      }
    }
  } else {
    return { x: '180px', y: '190px', scale: 1 };
  }
};
