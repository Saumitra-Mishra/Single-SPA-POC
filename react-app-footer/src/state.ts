let sharedState = { someValue: 100};

export function getSharedState() {
  return sharedState;
}

export function setSharedState(newState: { someValue: number; }) {
  sharedState = newState;
}