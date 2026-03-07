import type { PostMessage } from "../types/PostMessage";

const baseApi = import.meta.env.VITE_API_URL as string;

export const getEndPoint = async (endPoint: string) => {
  const response = await fetch(`${baseApi}/${endPoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Failed to fetch ${endPoint}`);

  return response.json();
};

export const getAbout = async () => {
  const response = await fetch(`${baseApi}/info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to fetch about content!");

  return response.json();
};

export const getProjects = async () => {
  const response = await fetch(`${baseApi}/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to fetch projects!");

  return response.json();
};

export const getAchievements = async () => {
  const response = await fetch(`${baseApi}/achievements`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to fetch achievements!");

  return response.json();
};

export const postMessage = async (message: PostMessage) => {
  const response = await fetch(`${baseApi}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    const result = await response.json();
    throw new Error(result?.message || "Error sending the message!");
  }

  return response.json();
};
