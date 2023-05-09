import "./src/styles/global.css";
export const onRouteUpdate = ({ location, prevLocation }) => {
    const { state } = location;
  
    if (state && state.scrollTarget && prevLocation && prevLocation.pathname !== location.pathname) {
      setTimeout(() => {
        const element = document.getElementById(state.scrollTarget.substring(1));
  
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };
  