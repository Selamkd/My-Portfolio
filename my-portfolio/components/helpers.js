export const getPositionAvatar = (scrolled) =>{
    if (window.innerWidth < 550) {
        return { x: '-10%', y: '-30%', scale:1.1 };
    } else if (window.innerWidth < 768) {
        return { x: '-37%', y: '-30%',scale:1.2 };
    } else if (window.innerWidth < 1400) {
        return { x: '-65%', y: '-20%', scale:1.0}
    }
    else {
        return { x: '-170%', y: '-45%' };
    }
}