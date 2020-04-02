export const documentTitle = () => {
  let state, visibilityChange;
  if (typeof document.hidden !== "undefined") {
    visibilityChange = "visibilitychange";
    state = "visibilityState";
  } else if (typeof document.mozHidden !== "undefined") {
    visibilityChange = "mozvisibilitychange";
    state = "mozVisibilityState";
  } else if (typeof document.msHidden !== "undefined") {
    visibilityChange = "msvisibilitychange";
    state = "msVisibilityState";
  } else if (typeof document.webkitHidden !== "undefined") {
    visibilityChange = "webkitvisibilitychange";
    state = "webkitVisibilityState";
  }

  let title = "";

  const target = document.querySelector("head > title");
  const observer = new window.WebKitMutationObserver(mutations => {
    const newTitle = mutations[0].target.textContent;
    title = newTitle.charAt(0) === "." ? title : newTitle;
  });
  observer.observe(target, { subtree: true, characterData: true, childList: true });

  document.addEventListener(
    visibilityChange,
    () => {
      document.title = document[state] === "hidden" ? `.😴. ${title}` : title;
    },
    false,
  );
};
