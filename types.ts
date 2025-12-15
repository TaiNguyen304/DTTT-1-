
export enum UserRole {
  HOST = 'HOST',
  MANAGER = 'MANAGER',
  CONTESTANT = 'CONTESTANT'
}

export interface Participant {
  username: string;
  role: UserRole;
  joined_at: number;
}

// The structure inside the JSONB 'data' column
export interface RoomData {
  round_1_video: string;
  round_2_videos: string[]; // [vid1, vid2, vid3]
  round_3_video: string;
  current_round: 0 | 1 | 2 | 3;
  is_playing: boolean;
  start_timestamp: number | null; // epoch time when play started
  
  // New: Store participants inside the JSONB data
  participants: Participant[];
}

// The DB Row structure
export interface RoomRow {
  id: string; // This corresponds to the 7-digit room_code
  data: RoomData;
}

// Helper for Google Drive conversion
export const convertDriveLink = (url: string): string => {
  if (!url) return '';
  // Convert view/sharing links to direct download/preview links for video tags
  // Note: For best results in a real app, use direct hosting. This is a best-effort parser.
  if (url.includes('drive.google.com') && url.includes('/file/d/')) {
    const id = url.split('/file/d/')[1].split('/')[0];
    return `https://drive.google.com/uc?export=download&id=${id}`;
  }
  return url;
};
