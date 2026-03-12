export class TestDataGenerator {
  static generateRandomEmail(): string {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `testuser_${randomString}@test.com`;
  }

  static generateRandomPassword(length: number = 12): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    let password = '';

    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
  }

  static generateRandomUsername(prefix: string = 'user'): string {
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${prefix}_${randomString}`;
  }

  static generateRandomPhoneNumber(): string {
    return `+1${Math.floor(Math.random() * 9000000000) + 1000000000}`;
  }

  static generateRandomString(length: number = 10): string {
    return Math.random().toString(36).substring(2, length + 2);
  }
}
