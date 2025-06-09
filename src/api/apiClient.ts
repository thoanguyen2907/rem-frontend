import { API_URL } from "@/utils/constants";

export async function fetchproductByLocation(postcode: string, area: string) {
    const url = `${API_URL}/skips/by-location?postcode=${encodeURIComponent(postcode)}&area=${encodeURIComponent(area)}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch skips: ${response.statusText}`);
    }
    
    return response.json();
  }