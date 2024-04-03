class Logger {
  private formatMessage(level: string, message: string): { template: string; styles: string[] } {
    const timestamp = new Date();
    const levelStyles = {
      info: 'color: deepskyblue',
      warn: 'color: orange',
      error: 'color: red',
    };
    const defaultStyle = 'color: black';
    const style = levelStyles[level] || defaultStyle;
    const template = `%c[${timestamp}] [${level.toUpperCase()}]: ${message}`;

    return { template, styles: [style] };
  }

  public log(level: 'info' | 'warn' | 'error', message: string): void {
    const { template, styles } = this.formatMessage(level, message);
    console.log(template, ...styles);
  }

  // Convenience methods
  public info(message: string): void {
    this.log('info', message);
  }

  public warn(message: string): void {
    this.log('warn', message);
  }

  public error(message: string): void {
    this.log('error', message);
  }
}
export const logger = new Logger();
