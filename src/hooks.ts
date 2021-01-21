import { SVNHook } from "./hooks/svnHookApi";

const registeredHooks: SVNHook[] = [];

export function registerHook(hook: SVNHook) {
  registeredHooks.push(hook);
}

export function getRegisteredHooks() {
  return registeredHooks;
}
