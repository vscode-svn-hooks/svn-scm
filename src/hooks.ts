/**
 * Provides an interface for this extension's API.
 * If the onPreCommit or onPreRevert functions throw an error, the action
 * will be aborted.
 *
 * @export
 * @interface SVNHook
 */
export interface SVNHook {
  onPreCommit?(documents: string[]): Promise<void>;
  onPostCommit?(documents: string[]): Promise<void>;
  onPreRevert?(documents: string[]): Promise<void>;
  onPostRevert?(documents: string[]): Promise<void>;
  onUpdate?(): Promise<void>;
}

export interface SVNHookApi {
  registerHook(hook: SVNHook): void;
}

const registeredHooks: SVNHook[] = [];

export function registerHook(hook: SVNHook) {
  registeredHooks.push(hook);
}

export function getRegisteredHooks() {
  return registeredHooks;
}
