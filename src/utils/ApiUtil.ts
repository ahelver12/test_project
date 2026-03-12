import { Page } from '@playwright/test';

export class ApiUtil {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async makeRequest(
    method: string,
    url: string,
    data?: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    const options: Record<string, unknown> = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await this.page.request.fetch(url, options as any);
    return await response.json();
  }

  async get(url: string): Promise<Record<string, unknown>> {
    return await this.makeRequest('GET', url);
  }

  async post(url: string, data: Record<string, unknown>): Promise<Record<string, unknown>> {
    return await this.makeRequest('POST', url, data);
  }

  async put(url: string, data: Record<string, unknown>): Promise<Record<string, unknown>> {
    return await this.makeRequest('PUT', url, data);
  }

  async delete(url: string): Promise<Record<string, unknown>> {
    return await this.makeRequest('DELETE', url);
  }

  async setAuthorizationHeader(token: string): Promise<void> {
    await this.page.request.get('/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
