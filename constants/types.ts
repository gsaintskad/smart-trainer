export interface Waypoint {
  id: string; // Fixed TS2353/TS2339
  latitude: number;
  longitude: number;
  timestamp: number;
  photo_uri?: string | null; // Fixed TS2339 (optional for waypoints without photos)
}

export interface TrainingSession {
  id: string;
  created_at: string; // Fixed TS2339/TS2353
  waypoints: Waypoint[];
}
