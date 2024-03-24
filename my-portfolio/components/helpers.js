export const getPositionAvatar = (scrolled) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  console.log(windowWidth, windowHeight);

  if (scrolled) {
    if (windowWidth > 1500) {
      return { x: '-170%', y: '-50%', scale: 2 };
    } else if (windowWidth < 1500 && windowWidth > 1400) {
      return { x: '-120%', y: '-35%', scale: 1.4 };
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
export const getPositionText = (scrolled) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  console.log(windowWidth, windowHeight);

  if (scrolled) {
    if (windowWidth > 1500) {
      return { x: '-170%', y: '-50%', scale: 2 };
    } else if (windowWidth < 1500 && windowWidth > 1400) {
      return { x: '-35%', y: '-150%', scale: 0.4 };
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
export const getPositionTextsm = (scrolled) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  console.log(windowWidth, windowHeight);

  if (scrolled) {
    if (windowWidth > 1500) {
      return { x: '-170%', y: '-50%', scale: 2 };
    } else if (windowWidth < 1500 && windowWidth > 1400) {
      return { x: '-152%', y: '-1100%', scale: 0.7 };
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
