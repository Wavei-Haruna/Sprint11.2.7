HydrateFn = setInterval(() => document.write("Hello "), 2000);
// timeout function to clear interval
StopFn = setTimeout(() => {
  clearInterval(HydrateFn);
}, 60000);
