/**
 * Storage utility module for persistent data management
 * Provides a type-safe interface for localStorage operations
 */

export interface StorageConfig<T> {
  key: string;
  defaultValue: T;
  validate?: (value: unknown) => value is T;
}

/**
 * Generic storage manager for persisting data to localStorage
 */
export class StorageManager<T> {
  private key: string;
  private defaultValue: T;
  private validate?: (value: unknown) => value is T;

  constructor(config: StorageConfig<T>) {
    this.key = config.key;
    this.defaultValue = config.defaultValue;
    this.validate = config.validate;
  }

  /**
   * Get value from localStorage
   * @returns The stored value or default value if not found/invalid
   */
  get(): T {
    try {
      const item = localStorage.getItem(this.key);
      if (item === null) {
        return this.defaultValue;
      }

      const parsed = JSON.parse(item);

      // If validation function is provided, use it
      if (this.validate && !this.validate(parsed)) {
        console.warn(`Invalid value in localStorage for key "${this.key}". Using default.`);
        return this.defaultValue;
      }

      return parsed as T;
    } catch (error) {
      console.error(`Error reading from localStorage (key: "${this.key}"):`, error);
      return this.defaultValue;
    }
  }

  /**
   * Set value in localStorage
   * @param value - The value to store
   */
  set(value: T): void {
    try {
      localStorage.setItem(this.key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage (key: "${this.key}"):`, error);
    }
  }

  /**
   * Remove value from localStorage
   */
  remove(): void {
    try {
      localStorage.removeItem(this.key);
    } catch (error) {
      console.error(`Error removing from localStorage (key: "${this.key}"):`, error);
    }
  }

  /**
   * Check if a value exists in localStorage
   */
  has(): boolean {
    return localStorage.getItem(this.key) !== null;
  }

  /**
   * Clear all data for this key and reset to default
   */
  clear(): void {
    this.remove();
  }
}

/**
 * Helper function to create a storage manager instance
 */
export function createStorage<T>(config: StorageConfig<T>): StorageManager<T> {
  return new StorageManager(config);
}

/**
 * Predefined storage keys to avoid typos and maintain consistency
 */
export const STORAGE_KEYS = {
  THEME: 'cyberego_theme',
  LANGUAGE: 'cyberego_language',
  USER_PREFERENCES: 'cyberego_user_preferences',
} as const;
