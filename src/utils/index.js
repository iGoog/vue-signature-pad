const SAVE_TYPE = ['image/png', 'image/jpeg', 'image/svg+xml'];

export const checkSaveType = type => SAVE_TYPE.includes(type);

export const DEFAULT_OPTIONS = {
  dotSize: (0.5 + 2.5) / 2,
  minWidth: 0.5,
  maxWidth: 2.5,
  throttle: 16,
  minDistance: 5,
  backgroundColor: 'rgba(0,0,0,0)',
  penColor: 'black',
  velocityFilterWeight: 0.7,
  onBegin: () => {},
  onEnd: () => {}
};

export const convert2NonReactive = observerValue =>
  JSON.parse(JSON.stringify(observerValue));

export const TRANSPARENT_PNG = {
  src:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkSAMAAGwAaKJgE8oAAAAASUVORK5CYII=',
  x: 0,
  y: 0
};
