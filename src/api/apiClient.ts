import { API_URL } from "../utils/constants";

export async function fetchproductByLocation(postcode: string, area: string, signal: AbortSignal) {
    const url = `${API_URL}/skips/by-location?postcode=${encodeURIComponent(postcode)}&area=${encodeURIComponent(area)}`;
    const response = await fetch(url, {signal});
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    
    return response.json();
  }