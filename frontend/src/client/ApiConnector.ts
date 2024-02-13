export default class ApiConnector {
    private readonly baseUrl: string;
  
    constructor() {
      this.baseUrl = "http://localhost:7000";
    }
  
    async get(
      path: string,
      requestParams?: Record<string, string>
    ): Promise<any> {
      const url = new URL(`${this.baseUrl}${path}`);
  
      if (requestParams) {
        Object.keys(requestParams).forEach((key) => {
          url.pathname = url.pathname.replace(`:${key}`, requestParams[key]);
        });
      }
  
      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      return response.json();
    }
  
    async post(path: string, body: Record<string, any>): Promise<any> {
      try {
          const url = `${this.baseUrl}${path}`;
  
          const response = await fetch(url, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
          });
  
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const responseData = await response.json();
          const offerId = responseData.offerId; // Odczytaj właściwość offerId z małej litery
          return offerId;
      } catch (error) {
          console.error("POST Error:", error);
          throw error;
      }
  }
}