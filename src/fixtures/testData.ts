export const testUsers = {
  validUser: {
    username: 'testuser@example.com',
    password: 'Test@12345',
  },
  invalidUser: {
    username: 'invalid@example.com',
    password: 'wrongpassword',
  },
  adminUser: {
    username: 'admin@example.com',
    password: 'Admin@12345',
  },
};

export const testUrls = {
  baseUrl: 'https://example.com',
  loginUrl: 'https://example.com/login',
  dashboardUrl: 'https://example.com/dashboard',
  profileUrl: 'https://example.com/profile',
};

export const testMessages = {
  loginSuccess: 'Login successful',
  loginFailed: 'Invalid credentials',
  requiredFieldError: 'This field is required',
  validationError: 'Please check the highlighted fields',
};
