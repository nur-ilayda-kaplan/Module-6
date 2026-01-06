/**
 * Simple logger utility for test automation framework.
 * This is part of the core layer and is not project-specific.
 */
class Logger {
  /**
   * Logs an info message
   * @param {string} message - message to log
   */
  static info(message) {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }

  /**
   * Logs a debug message
   * @param {string} message - message to log
   */
  static debug(message) {
    console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`);
  }

  /**
   * Logs a warning message
   * @param {string} message - message to log
   */
  static warn(message) {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
  }

  /**
   * Logs an error message
   * @param {string} message - message to log
   * @param {Error} error - error object (optional)
   */
  static error(message, error = null) {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
    if (error) {
      console.error(error);
    }
  }
}

module.exports = Logger;

