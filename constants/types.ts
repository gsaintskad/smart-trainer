export interface Waypoint {
  id: string; // unique ID for the point (optional, but good for lists)
  session_id: string; // links to the specific walk
  latitude: number; 
  longitude: number;
  altitude: number | null; // might be null if GPS signal is weak
  timestamp: number; // "created_at" - usually a Unix timestamp
}

export interface TrainingSession {
  id: string;
  created_at: string; // ISO string is often easier for UI dates
  waypoints: Waypoint[];
  // We will add photos here later!
}