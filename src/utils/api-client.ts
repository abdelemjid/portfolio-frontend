import type { PostMessage } from "../types/PostMessage";

export class ApiClient {
  private static baseApi: string = "http://localhost:5100/";

  static postMessage = async (message: PostMessage) => {
    const response = await fetch(`${this.baseApi}/messages`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(message),
    });

    if (!response.ok) throw new Error("Failed to send message!");

    return response.json();
  };
}
